import DishesModal from '../models/DishModal.js';

export const getDishes = (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};
