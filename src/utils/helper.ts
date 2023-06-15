//temp/don't delete
import { toJS } from 'mobx';

export const helper = (text: string, data: any) => {
  const result = toJS(data);
  console.log(text, result);
};
