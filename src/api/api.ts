import { instance } from '../api/axios';
import { ResultType, ingredientsType } from '../types';
import { getFormattedList } from '../utils/getFormattedList';

export interface Result<T> {
  success?: T;
  error?: Error;
}

export const sendMessage = async (
  token: string,
  botId: number,
  products: { [key: string]: { name: string; id: string }[] }
  //@ts-ignore
): Promise<Result<ResultType>> => {
  let responseData = {} as { success: boolean; error: string };
  const text = getFormattedList(products);
  const response = await sendMessageToTelegramBot({ token, botId, text });
  try {
    responseData.success = response.ok;
  } catch {}
};

export const sendMessageToTelegramBot = (params: {
  token: string;
  botId: number;
  text: string;
}): Promise<ResultType> => {
  return instance.get(`bot${params.token}/sendMessage`, {
    params: {
      chat_id: params.botId,
      text: params.text,
    },
  });
};
