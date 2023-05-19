import { makeAutoObservable } from 'mobx';
import lazania from './../images/лазанья.jpg';
import kartoshka from './../images/жареная картошка.jpg';
import { log } from 'console';

class StoreApp {
  categories = [
    {
      name: 'Супы',
      dishes: [
        {
          id: 1,
          image: lazania,
          dishName: 'Лазанья',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
        {
          id: 2,
          image: kartoshka,
          dishName: 'Жареная картошка',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Салаты',
      dishes: [
        {
          id: 3,
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
          id: 4,
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
          id: 5,
          image: '',
          dishName: 'Лазанья',
          ingredients: ['9', '11', '12', '1', '2'],
          tags: ['1', '2', '3'],
        },
      ],
    },
  ];

  ingredients = {
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

  addToCart = (list: string[]) => {
    let listOfProducts: string[] = [];
    list.map((item) => {
      //listOfProducts.push(this.ingredients[item].name);
    });
    console.log('log', this.ingredients);
    return (this.cartContents = [...this.cartContents, ...list]);
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new StoreApp();
