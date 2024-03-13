import {
  getMenuSections,
  getIngredientsList,
  sendDishData,
  getMenuSectionList,
} from '../api/api';
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

//getMenuSectionList

export const fetchMenuSectionList = async (
  id: string,
  setMenuSectionList: (data: categoriesType) => void
) => {
  try {
    const response = await getMenuSectionList(id);
    //для моков
    setMenuSectionList(response.data);
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
