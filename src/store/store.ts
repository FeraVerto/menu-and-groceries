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
  userDataResponse,
} from './storeTypes';
import {
  fetchSectionsMenu,
  fetchIngredients,
  sendDishItem,
  fetchMenuSectionList,
  sendSectionMenuItem,
  userLogin,
  userRegister,
} from './service';
import { helper } from '../utils/helper';
import { instance } from '../api/axios';

class StoreApp {
  constructor() {
    makeAutoObservable(this);
    this.checkAuthStore();
  }

  checkAuthStore = async () => {
    try {
      const response = await this.checkAuth();
      if (response.status === 200) {
        this.user.username = response.data.username;
        this.user.id = response.data.userId;
        this.isAuth = false;
      }
    } catch (e) {}
  };

  async checkAuth() {
    return instance.post(`/auth/check`);
  }

  user: userType = {
    id: '',
    username: '',
    botToken: '',
    chatId: [],
    isAuth: false,
  };

  isAuth: boolean = false;
  isRegister: boolean = false;

  error: string = '';
  //всё меню
  menu: categoriesType[] = [];
  //список ингредиентов для select в модальном окне(пока загружаем всё, что есть)
  //нужно придумать как лениво подгружать с сервера
  ingredients: ingredientsType = {};

  //меню, левый сайдбар
  sectionMenuList: sectionListType[] = [];

  //список блюд с ингредиентами, которые в него входят
  //key = id
  dishes: { [key: string]: { dishName: string; ingredients: string[] } } = {};

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
    if (dishID && dishName) {
      this.dishes[dishID] = { dishName, ingredients: [] };
    }

    //формируем данные для отрисовки в модальном окне
    const result = data.reduce((acc, item) => {
      if (dishName && dishID) {
        this.dishes[dishID]?.ingredients?.push(item.id);
      }
      //заполняем массив актуальных id
      if (!this.addedIngredientsId.includes(item.id)) {
        this.addedIngredientsId.push(item.id);

        if (!acc[item.category]) {
          acc[item.category] = [{ name: item.name, id: item.id }];
        } else {
          acc[item.category]?.push({ name: item.name, id: item.id });
        }

        //удаляем id из массива удаленных ингредиентовб если они там есть
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

  deleteIngredients = (
    ingredientsId: string[] | [],
    type?: 'dish',
    dishID?: string
  ) => {
    if (type === 'dish' && dishID) {
      //если добавлено несколько блюд, а затем мы удаляем одно из них,
      //то проверяем, чтобы не удалились ингредиенты, которые входят в другие блюда
      for (let key in this.dishes) {
        if (key !== dishID) {
          ingredientsId = this.dishes[dishID].ingredients.filter(
            (id) => !this.dishes[key].ingredients.includes(id)
          );
        }
      }

      delete this.dishes[dishID];
    }

    //добавляем id в массив удалённых ингредиентов
    this.deletedIngredientsId = [
      ...this.deletedIngredientsId,
      ...ingredientsId,
    ];

    ingredientsId.forEach((id) => {
      //условие для продуктов, которые не входят в блюда (селект)
      const ingredient = this.ingredients[id]; //{name: 'говядина', category: 'мясо'}
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

  userData = (data: userDataResponse) => {
    this.user.isAuth = true;
    this.user.id = data.userId;
    this.user.username = data.username;
  };

  toggleIsRegister = (data: boolean) => {
    this.isRegister = true;
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
    this.ingredients = data;
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

  setlogin = (data: { username: string; password: string }) => {
    userLogin(this.userData.bind(this), data);
  };

  setRegisterData = (data: { username: string; password: string }) => {
    userRegister(this.toggleIsRegister.bind(this), data);
  };

  loadSectionMenu = () => {
    fetchSectionsMenu(this.setSectionsMenu.bind(this));
  };

  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      fetchMenuSectionList(this.setMenuSectionList.bind(this), id);
    }
  };

  loadIngredients = () => {
    fetchIngredients(this.setIngredients.bind(this));
  };

  setNewDish = (dishData: dishDataPayload) => {
    sendDishItem(this.setNewDishItem.bind(this), dishData);
  };

  clearState = () => {
    this.addedIngredientsId = [];
    this.shoppingList = {};
    this.deletedIngredientsId = [];
    this.dataToShowDeletedIngredients = [];
  };
}

export default new StoreApp();
