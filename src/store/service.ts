import { getMenuSections, getIngredientsList, sendDishData } from '../api/api';
import {
  categoriesType,
  ingredientsType,
  dishDataType,
  dishType,
  sectionListType,
} from './storeTypes';

export const fetchSectionsMenu = async (
  setSectionMenuList: (data: sectionListType[]) => void
) => {
  try {
    const response = await getMenuSections();
    setSectionMenuList(response.data.menuSections);
  } catch {}
};

export const fetchDishes = async (
  setDishes: (data: categoriesType[]) => void,
  setIngredientsForRead: (data: {
    [key: string]: { name: string; category: string };
  }) => void
) => {
  try {
    // const response = await getDishesList();
    // //временно, можно вынести в отдельную функцию(?)
    // const dataToSearchIngredientsById: {
    //   [key: string]: { name: string; category: string };
    // } = {};
    // response.data.dataDishes.forEach((category) => {
    //   category.dishes.forEach((dish) => {
    //     dish.ingredients.forEach((ingredient) => {
    //       dataToSearchIngredientsById[ingredient.id] = {
    //         name: ingredient.name,
    //         category: ingredient.category,
    //       };
    //     });
    //   });
    // });
    // setIngredientsForRead(dataToSearchIngredientsById);
    // setDishes(response.data.dataDishes);
  } catch (error) {}
};

export const fetchIngredients = async (
  setIngredients: (responseIngredients: ingredientsType) => void
) => {
  try {
    const responseIngredients = await getIngredientsList();
    setIngredients(responseIngredients.data.ingredients);
  } catch (error) {}
};

//Сделать отправку блюда на бэк
export const sendDishItem = async (
  setNewDishItem: (data: dishType) => void,
  dishData: dishDataType
) => {
  try {
    const response = await sendDishData(dishData);
    setNewDishItem(response.data.dataDishes);
  } catch (error) {}
};
