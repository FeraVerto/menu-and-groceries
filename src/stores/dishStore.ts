import { makeAutoObservable } from 'mobx';
import { MenuStore } from './menuStore';
import {
  dishDataPayload,
  dishType,
  ErrorResponse,
  ingredientsType,
} from './storeTypes';
import { dishService } from '../api/api';
import { AxiosError } from 'axios';
import { helper } from '../utils/helper';

export class DishStore {
  menuStore: MenuStore;
  error: ErrorResponse | null = null;

  //список блюд с ингредиентами, которые в него входят
  //key = id
  dishes: {
    [key: string]: { dishName: string; ingredients: ingredientsType[] };
  } = {};
  constructor(menuStore: MenuStore) {
    makeAutoObservable(this);
    this.menuStore = menuStore;
  }

  setError = (error: ErrorResponse) => {
    this.error = error;
  };

  setNewDishItem = (data: dishType) => {
    const menu = this.menuStore.menu;
    let category = menu.find((item) => {
      return data.sectionId === item.id;
    });

    return category?.dishes.push(data);
  };

  sendDishItem = async (dishData: dishDataPayload) => {
    try {
      const response = await dishService.sendDishData(dishData);
      this.setNewDishItem(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };
}
