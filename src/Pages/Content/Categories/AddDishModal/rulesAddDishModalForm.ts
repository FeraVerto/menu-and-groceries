import { regular } from '../../../../assets/constants';

export const rules = {
  dishName: [
    {
      required: true,
      message: 'Введите название блюда',
    },
    {
      max: 150,
      required: true,
      message: 'Превышен лимит в 150 символов',
    },
  ],

  ingredients: [
    {
      required: true,
      message: 'Выберите ингредиенты!',
    },
  ],

  menuSection: [
    {
      required: true,
      message: 'Поле должно быть заполнено!',
    },
  ],

  link: [
    {
      pattern: regular.VALIDATE_URL,
      message: 'Некорректный URL',
    },
  ],
};
