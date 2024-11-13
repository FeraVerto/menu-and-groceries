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
  dishesListNameForSend: string[]
): Promise<Result<ResultType | ErrorType>> => {
  let responseData = {} as { success: ResultType; error: Error };
  const text = getFormattedListProducts(products, dishesListNameForSend);

  try {
    const response = await sendMessageToTelegramBot({ token, botId, text });
    responseData.success = response;
  } catch (error: any) {
    if (error?.response.status === 404) {
      responseData.error = new Error('Ошибка 404, неверный адрес');
    } else {
      responseData.error = new Error('Неизвестная ошибка');
    }
  }

  return responseData;
};
