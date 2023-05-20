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
          ingredients: ['6', '3', '8', '4', '5'],
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

  ingredients: { [key: string]: { name: string; category: string } } = {
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

  productsCategorized: { [key: string]: string[] } = {};

  addToCart = (list: string[]) => {
    this.cartContents = [...this.cartContents, ...list];
    let listOfProducts: { [key: string]: string[] } = {};

    this.cartContents.map((item) => {
      const category = this.ingredients[item].category;
      const name = this.ingredients[item].name;

      if (!listOfProducts[category]) {
        listOfProducts[category] = [name];
      } else {
        listOfProducts[category].push(name);
      }
    });

    // let listOfProducts = this.cartContents.reduce((acc, item) => {
    //   const category = this.ingredients[item].category;
    //   const name = this.ingredients[item].name;

    //   if (acc[category]) {
    //     acc[category] = [];
    //   } else {
    //     acc[category]?.push(name);
    //   }

    //   return acc;
    // }, {} as { [key: string]: string[] });

    return (this.productsCategorized = {
      ...this.productsCategorized,
      ...listOfProducts,
    });
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new StoreApp();
