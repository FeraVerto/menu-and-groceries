//libraries
import { instanceTelegram, instance } from '../api/axios';
//models
import { ResultType } from '../model/modelTypes';
//types
import {
  sectionsType,
  ingredientsType,
  dishDataPayload,
  dishType,
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

export const menuService = {
  getMenuSections: (): Promise<{
    data: sectionsType[];
  }> => {
    return instance.get(`/menu-and-groceries/menu/sections`);
  },
  sendSectionMenu: (data: {
    sectionName: string;
  }): Promise<{
    data: sectionsType;
  }> => {
    return instance.post(`/menu-and-groceries/menu/sections`, data);
  },
  getMenuSectionList: (
    id: string
  ): Promise<{
    data: sectionsType;
  }> => {
    return instance.get(`/menu-and-groceries/menu/dishes/${id}`);
  },
};

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

export const ingredientsService = {
  getIngredientsList: (): Promise<{
    data: ingredientsType;
  }> => {
    return instance.get(`/menu-and-groceries/ingredients`);
  },
};

export const dishService = {
  sendDishData: (data: dishDataPayload): Promise<{ data: dishType }> => {
    //временно, придумать эндпоинт
    return instance.post(`/menu-and-groceries/dishes`, data);
  },
};
