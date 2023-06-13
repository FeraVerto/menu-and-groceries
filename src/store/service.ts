import { getDishesList, getIngredientsList } from '../api/api';
import { categoriesType, ingredientsType } from './storeTypes';

export const fetchDishes = async (
  setDishes: (data: categoriesType[]) => void
) => {
  try {
    const response = await getDishesList();
    setDishes(response.data.dishes);
  } catch (error) {}
};

export const fetchIngredients = async (
  setIngredients: (responseIngredients: ingredientsType) => void
) => {
  try {
    const responseIngredients = await getIngredientsList();
    setIngredients(responseIngredients.data.ingredients);
  } catch (error) {}
};
