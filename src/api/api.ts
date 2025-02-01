//libraries
import { instanceTelegram, instance } from '../api/axios';
//models
import { ResultType } from '../model/modelTypes';
//types
import {
  categoriesType,
  ingredientsType,
  dishDataPayload,
  dishType,
  sectionListType,
} from '../stores/storeTypes';

export const authService = {
  checkAuth: () => {
    return instance.post(`/auth/check`);
  },
  login: (params: { username: string; password: string }) => {
    return instance.post(`/menu-and-groceries/auth/login`, params);
  },
  logout: () => {
    return instance.post('/menu-and-groceries/auth/logout');
  },
  register: (params: { username: string; password: string }) => {
    return instance.post(`/menu-and-groceries/auth/register`, params);
  },
};

// export const checkAuth = () => {
//   return instance.post(`/auth/check`);
// };

// export const login = (params: { username: string; password: string }) => {
//   return instance.post(`/menu-and-groceries/auth/login`, params);
// };

// export const logout = () => {
//   return instance.post('/menu-and-groceries/auth/logout');
// };

// export const register = (params: { username: string; password: string }) => {
//   return instance.post(`/menu-and-groceries/auth/register`, params);
// };

export const sendMessageToTelegramBot = (params: {
  token: string;
  botId: number;
  text: string;
}): Promise<ResultType> => {
  return instanceTelegram.get(`bot${params.token}/sendMessage`, {
    params: {
      chat_id: params.botId,
      text: params.text,
    },
  });
};

export const getMenuSections = (): Promise<{
  data: { menuSections: sectionListType[] };
}> => {
  return instance.get(`/menu-and-groceries/menu/sections`);
};

export const sendSectionMenuData = (
  data: string
): Promise<{
  data: categoriesType;
}> => {
  return instance.post(`/menu-and-groceries/menu/sections`, data);
};

export const getMenuSectionList = (
  id: string
): Promise<{
  data: categoriesType;
}> => {
  return instance.get(`/menu-and-groceries/menu/dishes/${id}`);
};

export const getIngredientsList = (): Promise<{
  data: { ingredients: ingredientsType };
}> => {
  return instance.get(`/menu-and-groceries/ingredients`);
};

export const sendDishData = (
  data: dishDataPayload
): Promise<{ data: dishType }> => {
  //временно, придумать эндпоинт
  return instance.post(`/menu-and-groceries/addDish`, data);
};
