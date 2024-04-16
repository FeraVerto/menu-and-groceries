//libraries
import { makeAutoObservable } from 'mobx';
//types
import {
  dishDataPayload,
  categoriesType,
  dishType,
  ingredientsType,
  sectionListType,
  userType,
} from './storeTypes';
import {
  fetchSectionsMenu,
  fetchIngredients,
  sendDishItem,
  fetchMenuSectionList,
  sendSectionMenuItem,
} from './service';
import { helper } from '../utils/helper';

class StoreApp {
  constructor() {
    makeAutoObservable(this);
  }

  user: userType = {
    id: '1',
    botToken: '',
    chatId: [],
  };

  isAuth: boolean = true;

  error: string = '';
  //всё меню
  menu: categoriesType[] = [];
  //список ингредиентов для select в модальном окне(пока загружаем всё, что есть)
  //нужно придумать как лениво подгружать с сервера
  _ingredients: ingredientsType = {};
  //быстрый поиск по id ингредиентов (ингредиенты из dataDishes)
  _ingredientsListForSearchId: {
    [key: string]: { name: string; category: string };
  } = {};

  //меню, левый сайдбар
  sectionMenuList: sectionListType[] = [];

  //[id блюда]: name блюда
  dishesSearchForId: { [key: string]: string } = {};
  //список блюд с ингредиентами, которые в него входят
  //{[id блюда]: [id ингредиентов]
  dishesWithIngredients: { [key: string]: string[] } = {};

  //список id актуальных ингредиентов
  addedIngredientsId: string[] = [];
  //данные для отображения добавленных ингредиентов в модальном окне
  //в разбитом на категории виде. (key это category категория ингредиента: мясо, овощи)
  shoppingList: {
    [key: string]: { name: string; id: string }[];
  } = {};

  //список id удалённых ингредиентов
  deletedIngredientsId: string[] = [];
  //данные для отображения удалённых ингредиентов в модальном окне, без категории
  dataToShowDeletedIngredients: { name: string; id: string }[] = [];

  addIngredientsToCartList = (
    data: { name: string; category: string; id: string }[],
    dishName?: string,
    dishID?: string
  ) => {
    //добавили название блюда и его айдишник в актуальное
    if (dishID && dishName) {
      this.dishesSearchForId[dishID] = dishName;
      this.dishesWithIngredients[dishID] = data.map((item) => {
        return item.id;
      });
    }

    //формируем данные для отрисовки в модальном окне
    const result = data.reduce((acc, item) => {
      if (dishName) {
        this.dishesWithIngredients[dishName]?.push(item.id);
      }
      //заполняем массив актуальных id
      if (!this.addedIngredientsId.includes(item.id)) {
        this.addedIngredientsId.push(item.id);

        if (!acc[item.category]) {
          acc[item.category] = [{ name: item.name, id: item.id }];
        } else {
          acc[item.category]?.push({ name: item.name, id: item.id });
        }

        //удаляем id из массива удаленных ингредиентов
        this.deletedIngredientsId = this.deletedIngredientsId.filter(
          (id) => id !== item.id
        );
        //удаляем ингредиент из массива для отображения
        this.dataToShowDeletedIngredients =
          this.dataToShowDeletedIngredients.filter((ing) => ing.id !== item.id);

        return acc;
      } else {
        return acc;
      }
    }, {} as { [key: string]: [{ name: string; id: string }] });

    //если _shoppingList уже есть такая категория, то
    //добавляем ингредиент к существующей категории, иначе создаем новую категорию
    //c новым ингредиентом
    for (let category in result) {
      if (this.shoppingList.hasOwnProperty(category)) {
        this.shoppingList[category].push(...result[category]);
      } else {
        this.shoppingList[category] = result[category];
      }
    }

    return;
  };

  deleteIngredients = (arrayId: string[], type?: 'dish', dishID?: string) => {
    if (type === 'dish' && dishID) {
      delete this.dishesSearchForId[dishID];

      //если добавлено несколько блюд, а затем мы удаляем одно из них,
      //то проверяем, чтобы не удалились ингредиенты, которые входят в другие блюда
      for (let key in this.dishesWithIngredients) {
        if (key !== dishID) {
          arrayId = arrayId.filter(
            (id) => !this.dishesWithIngredients[key].includes(id)
          );
        }
      }

      delete this.dishesWithIngredients[dishID];
    }

    //добавляем id в массив удалённых ингредиентов
    this.deletedIngredientsId = [...this.deletedIngredientsId, ...arrayId];

    arrayId.forEach((id) => {
      //условие для продуктов, которые не входят в блюда (селект)
      const ingredient = this._ingredientsListForSearchId[id]; //{name: 'говядина', category: 'мясо'}
      const categoryIngredient = ingredient?.category;

      //удаляем элементы из списка добавленных продуктов
      const filteredData = this.shoppingList[categoryIngredient]?.filter(
        (ingredient) => {
          return ingredient.id !== id;
        }
      );
      this.shoppingList[categoryIngredient] = filteredData;

      //если в категории нет продуктов, удаляем категорию
      if (
        this.shoppingList[categoryIngredient]?.length === 0 ||
        !this.shoppingList[categoryIngredient]
      ) {
        delete this.shoppingList[categoryIngredient];
      }

      //удаляем id из добавленных продуктов
      this.addedIngredientsId = this.addedIngredientsId.filter(
        (item) => item !== id
      );

      //добавляем продукт в массив удаленных продуктов
      this.dataToShowDeletedIngredients.push({
        name: ingredient?.name,
        id,
      });
    });
    return;
  };

  //добавление отдельных продуктов(!) из селекта в модальном окне
  //в актуальный список ингредиентов
  addIngredientFromSelection = (
    data: { id: string; name: string; category: string }[]
  ) => {
    if (data.length === 0) {
      return null;
    }

    data.forEach((item) => {
      //проверяем есть ли уже ингредиент с таким id
      if (!this.addedIngredientsId.includes(item.id.toString())) {
        //можно добавить предупреждение, что такой продукт уже есть

        if (!this.shoppingList[item.category]) {
          this.shoppingList[item.category] = [{ name: item.name, id: item.id }];
        } else {
          this.shoppingList[item.category]?.push({
            name: item.name,
            id: item.id,
          });
        }
        this.addedIngredientsId = [...this.addedIngredientsId, item.id];
        //добавим в список для поиска, чтобы в дальнейшем не обращаться к _ingredients
        this._ingredientsListForSearchId[item.id] = {
          name: item.name,
          category: item.category,
        };

        //пока дублирование
        //удаляем id из массива удаленных ингредиентов
        this.deletedIngredientsId = this.deletedIngredientsId.filter(
          (id) => id !== item.id
        );
        //удаляем ингредиент из массива для отображения
        this.dataToShowDeletedIngredients =
          this.dataToShowDeletedIngredients.filter((ing) => ing.id !== item.id);
      }
    });
  };

  setIngredientsForRead = (data: {
    [key: string]: { name: string; category: string };
  }) => {
    this._ingredientsListForSearchId = data;
  };

  setSectionsMenu = (data: sectionListType[]) => {
    this.sectionMenuList = data;
  };

  setMenuSectionList = (data: categoriesType) => {
    // let currentId = this.menu.find((n) => n.sectionId === data.sectionId);
    // if (!currentId) {
    //   this.menu = [...this.menu, data];
    // }
    this.menu = [...this.menu, data];
  };

  setNewSectionMenu = (data: categoriesType) => {
    this.sectionMenuList = [
      ...this.sectionMenuList,
      { sectionId: data.sectionId, sectionName: data.sectionName },
    ];

    this.setMenuSectionList(data);
  };

  setSectionMenu = (data: string) => {
    const foundSection = this.sectionMenuList.find(
      (item) => item.sectionName === data
    );
    if (!foundSection) {
      sendSectionMenuItem(this.setNewSectionMenu.bind(this), data);
    } else {
      this.error = 'Уже существует!';
      //вывести сообщение, что такая секция меню уже существует
    }
  };

  setIngredients = (data: ingredientsType) => {
    this._ingredients = data;
  };

  setNewDishItem = (data: dishType) => {
    let category = this.menu.find((item) => {
      return data.sectionId === item.sectionId;
    });

    return category?.dishes.push(data);
  };

  setError = (error: string) => {
    this.error = error;
  };

  loadSectionMenu = () => {
    fetchSectionsMenu(this.setSectionsMenu.bind(this));
    this.setIngredientsForRead.bind(this);
  };

  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      fetchMenuSectionList(id, this.setMenuSectionList.bind(this));
    }
  };

  loadIngredients = () => {
    fetchIngredients(this.setIngredients.bind(this));
  };

  setNewDish = (dishData: dishDataPayload) => {
    sendDishItem(this.setNewDishItem.bind(this), dishData);
  };

  clearState = () => {
    this.dishesSearchForId = {};
    this.dishesWithIngredients = {};
    this.addedIngredientsId = [];
    this.shoppingList = {};
    this.deletedIngredientsId = [];
    this.dataToShowDeletedIngredients = [];
  };
}

export default new StoreApp();
