import Section from '../models/SectionModal.js';

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
  try {
    const sections = await Section.create();
    // res.status(200).json(sections);
  } catch (e) {
    res
      .status(500)
      .json({ status: 500, error: 'Ошибка сервера, секция не была создана' });
  }
};
