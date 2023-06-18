//libraries
import { makeAutoObservable } from 'mobx';
//types
import { categoriesType, ingredientsType, userType } from './storeTypes';
import { fetchDishes, fetchIngredients } from './service';

class StoreApp {
  constructor() {
    makeAutoObservable(this);
  }

  user: userType = {
    id: '1',
    botToken: '6002031381:AAHS_7A3rUa1ahyNZL2VFd3mgaJRfmqkGLs',
    chatId: [119818370, 153016172],
  };

  error: string = '';
  //всё меню
  _menu: categoriesType[] = [];
  //список ингредиентов для select в модальном окне(пока загружаем всё, что есть)
  //нужно придумать как лениво подгружать с сервера
  _ingredients: ingredientsType = {};
  //быстрый поиск по id ингредиентов (ингредиенты из dataDishes)
  _ingredientsListForSearchId: {
    [key: string]: { name: string; category: string };
  } = {};

  //[id блюда]: name блюда
  dishesSearchForId: { [key: string]: string } = {};
  //список блюд с ингредиентами, которые в него входят
  //{[id блюда]: [id ингредиентов]
  dishesWithIngredients: { [key: string]: string[] } = {};

  //список id актуальных ингредиентов
  addedIngredientsId: string[] = [];
  //данные для отображения добавленных ингредиентов в модальном окне
  //в разбитом на категории виде. (key это category категория ингредиента: мясо, овощи)
  dataToShowAddedIngredients: {
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

    //если _dataToShowAddedIngredients уже есть такая категория, то
    //добавляем ингридиент к существующей категории, иначе создаем новую категорию
    //c новым ингредиентом
    for (let category in result) {
      if (this.dataToShowAddedIngredients.hasOwnProperty(category)) {
        this.dataToShowAddedIngredients[category].push(...result[category]);
      } else {
        this.dataToShowAddedIngredients[category] = result[category];
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
      const filteredData = this.dataToShowAddedIngredients[
        categoryIngredient
      ]?.filter((ingredient) => {
        return ingredient.id !== id;
      });
      this.dataToShowAddedIngredients[categoryIngredient] = filteredData;

      //если в категории нет продуктов, удаляем категорию
      if (
        this.dataToShowAddedIngredients[categoryIngredient]?.length === 0 ||
        !this.dataToShowAddedIngredients[categoryIngredient]
      ) {
        delete this.dataToShowAddedIngredients[categoryIngredient];
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
  addIngredientFromSelection = (data: string[]) => {
    data.forEach((item) => {
      //проверяем есть ли уже ингредиент с таким id
      if (!this.addedIngredientsId.includes(item.toString())) {
        //можно добавить предупреждение, что такой продукт уже есть
        const id = item.toString();
        const category = this._ingredients[id]?.category;
        const name = this._ingredients[id]?.name;

        if (!this.dataToShowAddedIngredients[category]) {
          this.dataToShowAddedIngredients[category] = [{ name, id }];
        } else {
          this.dataToShowAddedIngredients[category]?.push({ name, id });
        }
        this.addedIngredientsId = [...this.addedIngredientsId, item];
        //добавим в список для поиска, чтобы в дальнейшем не обращаться к _ingredients
        this._ingredientsListForSearchId[id] = { name, category };

        //пока дублирование
        //удаляем id из массива удаленных ингредиентов
        this.deletedIngredientsId = this.deletedIngredientsId.filter(
          (id) => id !== item
        );
        //удаляем ингредиент из массива для отображения
        this.dataToShowDeletedIngredients =
          this.dataToShowDeletedIngredients.filter((ing) => ing.id !== item);
      }
    });
  };

  setIngredientsForRead = (data: {
    [key: string]: { name: string; category: string };
  }) => {
    this._ingredientsListForSearchId = data;
  };

  setDishes = (data: categoriesType[]) => {
    this._menu = data;
  };

  setIngredients = (data: ingredientsType) => {
    this._ingredients = data;
  };

  setError = (error: string) => {
    this.error = error;
  };

  loadDishes = () => {
    fetchDishes(
      this.setDishes.bind(this),
      this.setIngredientsForRead.bind(this)
    );
  };

  loadIngredients = () => {
    fetchIngredients(this.setIngredients.bind(this));
  };

  clearState = () => {
    this.dishesSearchForId = {};
    this.dishesWithIngredients = {};
    this.addedIngredientsId = [];
    this.dataToShowAddedIngredients = {};
    this.deletedIngredientsId = [];
    this.dataToShowDeletedIngredients = [];
  };
}

export default new StoreApp();
