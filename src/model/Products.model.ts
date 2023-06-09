import { getFormattedListProducts } from '../utils/getFormattedList';
import { ResultType, ErrorType } from './modelTypes';
import { sendMessageToTelegramBot } from '../api/api';

export interface Result<T> {
  success?: T;
  error?: Error;
}

export const sendMessage = async (
  token: string,
  botId: number,
  products: { [key: string]: { name: string; id: string }[] },
  dishesListNameForSend: { dishName: string; id: string }[]
): Promise<Result<ResultType | ErrorType>> => {
  let responseData = {} as { success: ResultType; error: Error };
  const dishNamesArray = getDishNames(dishesListNameForSend);
  const text = getFormattedListProducts(products, dishNamesArray);

  const response = await sendMessageToTelegramBot({ token, botId, text });
  try {
    responseData.success = response;
  } catch (error: any) {
    if (error?.error_code === '404') {
      responseData.error = new Error('Ошибка 404, ебать ты лох');
    } else {
      responseData.error = new Error('Я хуй знает что за ошибка');
    }
  }

  return responseData;
};

const getDishNames = (data: { dishName: string; id: string }[]): string[] => {
  return data.map((item) => item.dishName);
};
