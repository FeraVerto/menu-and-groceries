import { getIngredientsList, sendDishData } from '../api/api';
import {
  categoriesType,
  ingredientsType,
  dishDataPayload,
  dishType,
  sectionListType,
  userDataResponse,
  ErrorResponse,
} from './storeTypes';

// export const fetchSectionsMenu = async (
//   setSectionMenuList: (data: sectionListType[]) => void
// ) => {
//   try {
//     const response = await getMenuSections();
//     setSectionMenuList(response.data.menuSections);
//   } catch {}
// };

// export const sendSectionMenuItem = async (
//   setNewSectionMenu: (data: categoriesType) => void,
//   data: string
// ) => {
//   try {
//     const response = await sendSectionMenuData(data);
//     setNewSectionMenu(response.data);
//   } catch {}
// };

// export const fetchMenuSectionList = async (
//   setMenuSectionList: (data: categoriesType) => void,
//   id: string
// ) => {
//   try {
//     const response = await getMenuSectionList(id);
//     //для моков
//     setMenuSectionList(response.data);
//   } catch (error) {}
// };

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
  dishData: dishDataPayload
) => {
  try {
    const response = await sendDishData(dishData);
    setNewDishItem(response.data);
  } catch (error) {}
};
