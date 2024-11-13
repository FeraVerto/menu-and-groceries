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
} from '../store/storeTypes';

export const login = (params: { nickname: string; password: string }) => {
  return instance.post(`/menu-and-groceries/auth/login`, params);
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
