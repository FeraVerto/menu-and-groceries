import Dishes from '../models/DishModal.js';
import User from '../models/User.js';
import Section from '../models/SectionModal.js';

export const getDishes = (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};

export const postDishes = async (req, res) => {
  try {
    // const dishes = await Dishes.find({ userId: req.user._id });
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'Не авторизован' });
    }

    const newDish = new Dishes({
      dishName: req.body.dishName,
      link: req.body.link,
      image: {
        //type: String,
      },
      ingredients: req.body.ingredients,
      sectionId: req.body.sectionId,
      userId: req.user._id,
    });

    const savedDish = await newDish.save();

    await User.findByIdAndUpdate(req.user._id, {
      $push: { dish: savedDish._id },
    });

    await Section.findByIdAndUpdate(newDish.sectionId, {
      $push: { dishes: newDish._id },
    });

    res.status(200).json(newDish);
  } catch (e) {
    res.status(500).json('неведомая ошибка');
  }
};
