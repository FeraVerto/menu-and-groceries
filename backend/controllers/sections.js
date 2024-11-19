import Section from '../models/SectionModal.js';

export const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const postSections = async (req, res) => {
  try {
    const sections = await Section.find();
    // res.status(200).json(sections);
  } catch (e) {
    res.status(500).json(e);
  }
};
