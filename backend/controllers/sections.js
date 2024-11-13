import Section from '../models/SectionModal.js';

export const getSections = (req, res) => {
  try {
    const sections = Section.find();
    res.status(200).json(sections);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const postSections = (req, res) => {
  try {
    // const sections = Section.find();
    // res.status(200).json(sections);
  } catch (e) {
    res.status(500).json(e);
  }
};
