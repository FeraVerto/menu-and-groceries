//libraries
import { instanceTelegram, instance } from '../api/axios';
//models
import { ResultType } from '../model/modelTypes';
//types
import {
  categoriesType,
  ingredientsType,
  dishDataType,
  dishType,
} from '../store/storeTypes';

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

export const getDishesList = (): Promise<{
  data: { dataDishes: categoriesType[] };
}> => {
  return instance.get(`/menu-and-groceries/dishes`);
};

export const getIngredientsList = (): Promise<{
  data: { ingredients: ingredientsType };
}> => {
  return instance.get(`/menu-and-groceries/ingredients`);
};

export const sendDishData = (
  data: dishDataType
): Promise<{ data: { dataDishes: dishType } }> => {
  //временно, придумать эндпоинт
  return instance.post(`/menu-and-groceries/addDish`, data);
};
