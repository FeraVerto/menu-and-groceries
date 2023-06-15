import { getDishesList, getIngredientsList } from '../api/api';
import { categoriesType, ingredientsType } from './storeTypes';

export const fetchDishes = async (
  setDishes: (data: categoriesType[]) => void,
  setIngredientsForRead: (data: {
    [key: string]: { name: string; category: string };
  }) => void
) => {
  try {
    const response = await getDishesList();

    const dataToSearchIngredientsById: {
      [key: string]: { name: string; category: string };
    } = {};

    response.data.dataDishes.forEach((category) => {
      category.dishes.forEach((dish) => {
        dish.ingredients.forEach((ingredient) => {
          dataToSearchIngredientsById[ingredient.id] = {
            name: ingredient.name,
            category: ingredient.category,
          };
        });
      });
    });

    setIngredientsForRead(dataToSearchIngredientsById);
    setDishes(response.data.dataDishes);
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
