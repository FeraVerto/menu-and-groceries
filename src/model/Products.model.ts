import { getFormattedListProducts } from '../utils/getFormattedList';
import { ResultType, ErrorType } from '../types';
import { sendMessageToTelegramBot } from '../api/api';

export interface Result<T> {
  success?: T;
  error?: Error;
}

export const sendMessage = async (
  token: string,
  botId: number,
  products: { [key: string]: { name: string; id: string }[] },
  dishesListForSend: string[]
): Promise<Result<ResultType | ErrorType>> => {
  let responseData = {} as { success: ResultType; error: Error };
  const text = getFormattedListProducts(products, dishesListForSend);

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
