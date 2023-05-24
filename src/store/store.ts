import { makeAutoObservable } from 'mobx';
import lazania from './../images/лазанья.jpg';
import kartoshka from './../images/жареная картошка.jpg';
import { getUniqeElements } from '../utils/getUniqeElements';
import { userType } from '../types';

class StoreApp {
  user: userType = {
    id: '1',
    botToken: '0',
    chatId: 1,
  };

  categories = [
    {
      name: 'Супы',
      dishes: [
        {
          id: '1',
          image: lazania,
          dishName: 'Лазанья',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
        {
          id: '2',
          image: kartoshka,
          dishName: 'Жареная картошка',
          ingredients: ['6', '3', '8', '4', '5'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Салаты',
      dishes: [
        {
          id: '3',
          image: '',
          dishName: 'Салат',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Птица',
      dishes: [
        {
          id: '4',
          image: '',
          dishName: 'Лазанья',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Мясо',
      dishes: [
        {
          id: '5',
          image: '',
          dishName: 'Лазанья',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
      ],
    },
  ];

  ingredients: {
    [key: string]: {
      name: string;
      category: string;
    };
  } = {
    1: {
      name: 'сметана',
      category: 'молочка',
    },
    2: {
      name: 'сливки',
      category: 'молочка',
    },
    3: {
      name: 'масло',
      category: 'молочка',
    },
    4: {
      name: 'молоко',
      category: 'молочка',
    },
    5: {
      name: 'оливковое масло',
      category: 'бакалея',
    },
    6: {
      name: 'греча',
      category: 'бакалея',
    },
    7: {
      name: 'рис',
      category: 'бакалея',
    },
    8: {
      name: 'овсянка',
      category: 'бакалея',
    },
    9: {
      name: 'листы лазаньи',
      category: 'бакалея',
    },
    10: {
      name: 'мука',
      category: 'бакалея',
    },
    11: {
      name: 'фарш куриный',
      category: 'мясо',
    },
    12: {
      name: 'помидоры',
      category: 'овощи',
    },
  };

  cartContents: string[] = [];

  productsCategorized: { [key: string]: { name: string; id: string }[] } = {};

  addToCart = (list: string[]) => {
    this.cartContents = [...this.cartContents, ...list];

    //убираем дублирующиеся элементы, если они присутствуют в двух разных блюдах
    this.cartContents = getUniqeElements(this.cartContents);

    let listOfProducts = this.cartContents.reduce((acc, item) => {
      const category = this.ingredients[item].category;
      const name = this.ingredients[item].name;

      if (!acc[category]) {
        acc[category] = [{ name: name, id: item }];
      } else {
        acc[category]?.push({ name: name, id: item });
      }

      return acc;
    }, {} as { [key: string]: { name: string; id: string }[] });

    return (this.productsCategorized = {
      ...this.productsCategorized,
      ...listOfProducts,
    });
  };

  deleteProductFromList = (id: string, category: string) => {
    this.productsCategorized[category] = this.productsCategorized[
      category
    ].filter((item) => item.id !== id);
    if (this.productsCategorized[category].length === 0) {
      delete this.productsCategorized[category];
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new StoreApp();
