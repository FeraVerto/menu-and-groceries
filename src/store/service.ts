import {
  getMenuSections,
  getIngredientsList,
  sendDishData,
  getMenuSectionList,
  sendSectionMenuData,
  login,
  register,
  checkAuth,
} from '../api/api';
import {
  categoriesType,
  ingredientsType,
  dishDataPayload,
  dishType,
  sectionListType,
  userDataResponse,
} from './storeTypes';

export const checkAuthService = async (
  checkAuthStore: (authData: userDataResponse) => void
) => {
  try {
    const response = await checkAuth();
    if (response.status === 200) {
      checkAuthStore(response.data);
    }
  } catch (e) {}
};

export const userLogin = async (
  userData: (data: userDataResponse) => void,
  params: {
    username: string;
    password: string;
  }
) => {
  try {
    const response = await login(params);
    if (response.status === 200) {
      userData(response.data);
    }
  } catch {}
};

export const userRegister = async (
  toggleIsRegister: (data: boolean) => void,
  params: {
    username: string;
    password: string;
  }
) => {
  try {
    const response = await register(params);
    if (response.data.isUserCreated) {
      toggleIsRegister(true);
    }
  } catch {}
};

export const fetchSectionsMenu = async (
  setSectionMenuList: (data: sectionListType[]) => void
) => {
  try {
    const response = await getMenuSections();
    setSectionMenuList(response.data.menuSections);
  } catch {}
};

export const sendSectionMenuItem = async (
  setNewSectionMenu: (data: categoriesType) => void,
  data: string
) => {
  try {
    const response = await sendSectionMenuData(data);
    setNewSectionMenu(response.data);
  } catch {}
};

export const fetchMenuSectionList = async (
  setMenuSectionList: (data: categoriesType) => void,
  id: string
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
  dishData: dishDataPayload
) => {
  try {
    const response = await sendDishData(dishData);
    setNewDishItem(response.data);
  } catch (error) {}
};
