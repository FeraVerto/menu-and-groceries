//libraries
import { makeAutoObservable } from 'mobx';
//utils
import { getUniqeElements } from '../utils/getUniqeElements';
//data
import { categoriesData, ingredientsData } from './data';
//types
import {
  categoriesType,
  ingredientsDishes,
  ingredientsType,
  productsList,
  userType,
} from './storeTypes';

class StoreApp {
  user: userType = {
    id: '1',
    botToken: '6002031381:AAHS_7A3rUa1ahyNZL2VFd3mgaJRfmqkGLs',
    chatId: 153016172,
  };

  categories: categoriesType[] = categoriesData;

  ingredients: ingredientsType = ingredientsData;

  //список удалённых продуктов
  deletedProductsId: string[] = [];
  deletedProductsList: productsList = {};

  //список актуальных продуктов
  addedProductsId: string[] = [];
  addedProductsList: productsList = {};

  //список блюд
  dishesListNameForSend: { dishName: string; id: string }[] = [];
  //список id блюд и их ингредиенты
  ingredientsDishes: ingredientsDishes = {};

  addProductsToCartList = (
    data: string[],
    dishName?: string,
    id?: string
  ): productsList => {
    //Список выбранных блюд
    if (dishName && id) {
      const newObj: ingredientsDishes = createStringArrayObject(data, id);
      this.ingredientsDishes = { ...this.ingredientsDishes, ...newObj };
      this.dishesListNameForSend = [
        ...this.dishesListNameForSend,
        { dishName, id },
      ];
    }

    this.addedProductsId = [...this.addedProductsId, ...data];

    //убираем дублирующиеся элементы, если они присутствуют в двух разных блюдах
    this.addedProductsId = getUniqeElements(this.addedProductsId);

    let listOfProducts: productsList = generateListOfProducts(
      this.addedProductsId,
      this.ingredients
    );

    data.forEach((id) => {
      const category: string = this.ingredients[id].category;

      //удаляем продукты из списка удаленных продуктов
      if (this.deletedProductsList[category]?.length > 0) {
        this.deletedProductsList[category] = this.deletedProductsList[
          category
        ]?.filter((item) => item.id !== id);
      }

      //удаляем id из списка айдишников удалённых продуктов
      this.deletedProductsId = this.deletedProductsId?.filter(
        (item) => item !== id
      );

      //если в категории нет продуктов, удаляем категорию
      if (this.deletedProductsList[category]?.length === 0) {
        delete this.deletedProductsList[category];
      }
    });

    return (this.addedProductsList = {
      ...this.addedProductsList,
      ...listOfProducts,
    });
  };

  deleteProductFromList = (id: string): void => {
    //перемещаем удаленные из списка продукты в другой список (удалённых продуктов),
    //который поместим внизу, относительно основного списка в модальном окне
    this.deletedProductsId = [...this.deletedProductsId, id];

    //удаляем повторяющиеся элементы
    this.deletedProductsId = getUniqeElements(this.deletedProductsId);
    let data = generateListOfProducts(this.deletedProductsId, this.ingredients);
    this.deletedProductsList = {
      ...this.deletedProductsList,
      ...data,
    };

    //удаляем продукты из основного списка
    const category: string = this.ingredients[id].category;
    this.addedProductsList[category] = this.addedProductsList[category]?.filter(
      (item) => item.id !== id
    );

    //удаляем id из основного списка айдишников
    this.addedProductsId = this.addedProductsId?.filter((item) => item !== id);

    //если в категории нет продуктов, удаляем категорию
    if (
      this.addedProductsList[category]?.length === 0 ||
      !this.addedProductsList[category]
    ) {
      delete this.addedProductsList[category];
    }
  };

  deleteDishesFromList = (id: string): void => {
    //находим по id список продуктов, входящих в блюдо
    //удаляем их из основного актуального списка
    this.ingredientsDishes[id]?.forEach((item) => {
      this.deleteProductFromList(item);
    });

    this.dishesListNameForSend = this.dishesListNameForSend.filter(
      (item) => item.id !== id
    );

    delete this.ingredientsDishes[id];

    //для того, чтобы, когда мы удаляем  блюдо и его ингредиенты, не
    //удалялись ингредиенты, которые так же входят в другое блюдо
    const ingredientsFromActyallyDish = Object.values(
      this.ingredientsDishes
    ).reduce((acc, curr) => acc.concat(curr), []);

    const newArray: string[] = [
      ...this.addedProductsId,
      ...ingredientsFromActyallyDish.filter(
        (item) => !this.addedProductsId.includes(item)
      ),
    ];

    this.addProductsToCartList(newArray);
  };

  clearState = () => {
    this.deletedProductsId = [];
    this.deletedProductsList = {};
    this.addedProductsId = [];
    this.addedProductsList = {};
    this.dishesListNameForSend = [];
    this.ingredientsDishes = {};
  };

  constructor() {
    makeAutoObservable(this);
  }
}

//формируем из массива айдишников string[]
//объект вида { [key: string]: { name: string; id: string }[] }
const generateListOfProducts = (
  data: string[],
  ingredientsData: ingredientsType
): productsList => {
  return data.reduce((acc, item) => {
    const category = ingredientsData[item].category;
    const name = ingredientsData[item].name;

    if (!acc[category]) {
      acc[category] = [{ name: name, id: item }];
    } else {
      acc[category]?.push({ name: name, id: item });
    }

    return acc;
  }, {} as productsList);
};

//params: data: string[],
//params: id: string
//return { [key: string]: string[] }
const createStringArrayObject = (
  data: string[],
  id: string
): { [key: string]: string[] } => {
  const result: { [key: string]: string[] } = {};
  result[id] = data;
  return result;
};

export default new StoreApp();
