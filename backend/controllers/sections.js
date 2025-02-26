import Section from '../models/SectionModal.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const getSections = async (req, res) => {
  try {
    const sections = await Section.find({ userId: req.user._id }).populate({
      path: 'dishes',
    });

    const data = sections.map((item) => {
      return {
        id: item._id,
        sectionName: item.sectionName,
        dishes: item.dishes ?? [],
      };
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};

export const postSections = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: 'Не авторизован' });
  }
  try {
    const newSection = new Section({
      sectionName: req.body.sectionName,
      userId: req.user._id,
      dishes: [],
    });

    const savedCategory = await newSection.save();

    await User.findByIdAndUpdate(req.user._id, {
      $push: { sections: savedCategory._id },
    });

    res.status(201).json(savedCategory);
  } catch (e) {
    res
      .status(500)
      .json({ status: 500, error: 'Ошибка сервера, секция не была создана' });
  }
};
