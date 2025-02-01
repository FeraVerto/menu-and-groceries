import { makeAutoObservable } from 'mobx';
import { MenuStore } from './menuStore';
import { dishDataPayload, dishType } from './storeTypes';
import { dishService } from '../api/api';

export class DishStore {
  menuStore: MenuStore;
  error: string = '';

  //список блюд с ингредиентами, которые в него входят
  //key = id
  dishes: { [key: string]: { dishName: string; ingredients: string[] } } = {};
  constructor(menuStore: MenuStore) {
    makeAutoObservable(this);
    this.menuStore = menuStore;
  }

  setNewDishItem = (data: dishType) => {
    const menu = this.menuStore.menu;
    let category = menu.find((item) => {
      return data.sectionId === item.sectionId;
    });

    return category?.dishes.push(data);
  };

  sendDishItem = async (dishData: dishDataPayload) => {
    try {
      const response = await dishService.sendDishData(dishData);
      this.setNewDishItem(response.data);
    } catch (error) {}
  };

  setError = (error: string) => {
    this.error = error;
  };
}
