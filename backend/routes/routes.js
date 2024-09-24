import { Router } from 'express';

const router = Router();

router.get('/menu-and-groceries', (req, res) => {});

router.get('/menu-and-groceries/menu/sections', (req, res) => {
  res.json({
    menuSections: [
      { sectionId: 'sec1', sectionName: 'Новые блюда' },
      { sectionId: 'sec2', sectionName: 'Супы' },
      { sectionId: 'sec3', sectionName: 'Салаты' },
      { sectionId: 'sec4', sectionName: 'Вторые блюда' },
      { sectionId: 'sec5', sectionName: 'Гарнир' },
      { sectionId: 'sec6', sectionName: 'Мясо' },
      { sectionId: 'sec7', sectionName: 'Выпечка' },
      { sectionId: 'sec8', sectionName: 'Новый год' },
    ],
  });
});

router.post('/menu-and-groceries/menu/sections', () => {}); //+data

router.get(`/menu-and-groceries/menu/dishes/:id`, () => {});

router.get(`/menu-and-groceries/ingredients`, () => {});

router.post(`/menu-and-groceries/addDish`, () => {}); //+data

export default router;
