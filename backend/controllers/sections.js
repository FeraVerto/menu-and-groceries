import Section from '../models/SectionModal.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (e) {
    // res.status(500).json(e);
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};

export const postSections = async (req, res) => {
  const section = req.body.sectionName;
  const token = req.cookies?.access_token;
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const newSection = new Section({
      sectionName: section,
      user: decoded.userId,
    });
    console.log('newSection', newSection);

    const savedCategory = await newSection.save();

    await User.findByIdAndUpdate(decoded.userId, {
      $push: { sections: savedCategory._id },
    });

    res.status(201).json(savedCategory);
  } catch (e) {
    res
      .status(500)
      .json({ status: 500, error: 'Ошибка сервера, секция не была создана' });
  }
};
