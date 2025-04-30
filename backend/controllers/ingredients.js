import Ingredients from '../models/IngredientModal.js';

export const getIngredients = async (req, res) => {
  const ingredients = await Ingredients.find();
  res.status(200).json(ingredients);
  try {
  } catch (e) {
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};
