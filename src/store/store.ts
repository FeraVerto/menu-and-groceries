import { makeAutoObservable } from 'mobx';
import lazania from './../images/лазанья.jpg';
import kartoshka from './../images/жареная картошка.jpg';
import borsh from './../images/борщ.jpg';
import che from './../images/чечевичный суп с беконом.jpg';
import zero from './../images/zero.jpg';
import kar_gar from './../images/крошка картошка.jpg';
import solanka from './../images/solanka.jpg';
import olivie from './../images/olivie.jpg';
import plov from './../images/плов.jpg';
import jul from './../images/jul.jpg';
import ovoch from './../images/овощное рагу.jpg';
import kurva from './../images/kurva.jpg';
import kurva_sir from './../images/kurva_sir.jpg';
import { getUniqeElements } from '../utils/getUniqeElements';
import { userType } from '../types';

class StoreApp {
  user: userType = {
    id: '1',
    botToken: '6002031381:AAHS_7A3rUa1ahyNZL2VFd3mgaJRfmqkGLs',
    chatId: 153016172,
  };

  categories = [
    {
      name: 'Супы',
      dishes: [
        {
          id: '1-1',
          image: borsh,
          dishName: 'Борщ',
          ingredients: [
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
          ],
          tags: ['1', '2', '3'],
        },
        {
          id: '1-2',
          image: che,
          dishName: 'Суп с чечевицей и беконом',
          ingredients: ['14', '27', '17', '18', '29', '23', '24'],
          tags: ['1', '2', '3'],
        },
        {
          id: '1-3',
          image: zero,
          dishName: 'Вкусносуп с копченой колбасой',
          ingredients: ['14', '17', '18', '36', '37', '23'],
          tags: ['1', '2', '3'],
        },
        {
          id: '1-4',
          image: solanka,
          dishName: 'Солянка',
          ingredients: [
            '13',
            '14',
            '17',
            '18',
            '19',
            '36',
            '35',
            '38',
            '22',
            '25',
            '23',
            '24',
            '39',
          ],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Салаты',
      dishes: [
        {
          id: '2-1',
          image: olivie,
          dishName: 'Оливье',
          ingredients: ['14', '30', '33', '34', '35', '32', '23'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Вторые блюда',
      dishes: [
        {
          id: '3-1',
          image: lazania,
          dishName: 'Лазанья',
          ingredients: [
            '9',
            '11',
            '18',
            '17',
            '21',
            '4',
            '3',
            '10',
            '28',
            '23',
            '24',
            '25',
          ],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-2',
          image: kartoshka,
          dishName: 'Жареная картошка',
          ingredients: ['14', '25', '23'],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-3',
          image: zero,
          dishName: 'Картофель пармезан',
          ingredients: ['14', '25', '23', '32'],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-4',
          image: plov,
          dishName: 'плов',
          ingredients: [
            '7',
            '17',
            '18',
            '13',
            '40',
            '41',
            '42',
            '21',
            '23',
            '25',
          ],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-5',
          image: ovoch,
          dishName: 'овощное рагу',
          ingredients: ['14', '15', '17', '18', '12', '43', '19', '26'],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-6',
          image: jul,
          dishName: 'жульен',
          ingredients: ['44', '47', '18', '28', '2', '3', '23', '24', '25'],
          tags: ['1', '2', '3'],
        },
        {
          id: '3-7',
          image: kar_gar,
          dishName: 'картошка-гармошка',
          ingredients: ['14', '29', '48', '23', '24'],
          tags: ['1', '2', '3'],
        },
      ],
    },
    {
      name: 'Мясо',
      dishes: [
        {
          id: '4-1',
          image: kurva,
          dishName: 'Котлеты куриные рубленные',
          ingredients: ['11', '30', '31', '23', '24'],
          tags: ['1', '2', '3'],
        },
        {
          id: '4-2',
          image: kurva_sir,
          dishName: 'куриное филе в сырной корочке',
          ingredients: ['44', '30', '45', '46'],
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
    1: { name: 'сметана', category: 'молочка' },
    2: { name: 'сливки', category: 'молочка' },
    3: { name: 'сливочное масло', category: 'молочка' },
    4: { name: 'молоко', category: 'молочка' },
    5: { name: 'оливковое масло', category: 'бакалея' },
    6: { name: 'греча', category: 'бакалея' },
    7: { name: 'рис', category: 'бакалея' },
    8: { name: 'овсянка', category: 'бакалея' },
    9: { name: 'листы лазаньи', category: 'бакалея' },
    10: { name: 'мука', category: 'бакалея' },
    11: { name: 'фарш куриный', category: 'мясо' },
    12: { name: 'помидоры', category: 'овощи' },
    13: { name: 'говядина', category: 'мясо' },
    14: { name: 'картофель', category: 'овощи' },
    15: { name: 'свежая капуста', category: 'овощи' },
    16: { name: 'свекла', category: 'овощи' },
    17: { name: 'морковь', category: 'овощи' },
    18: { name: 'лук', category: 'овощи' },
    19: { name: 'томатная паста', category: 'бакалея' },
    20: { name: 'уксус 6%', category: 'бакалея' },
    21: { name: 'чеснок', category: 'овощи' },
    22: { name: 'лавровый лист', category: 'бакалея' },
    23: { name: 'соль', category: 'бакалея' },
    24: { name: 'перец', category: 'бакалея' },
    25: { name: 'растительное масло', category: 'бакалея' },
    26: { name: 'зелень', category: 'овощи' },
    27: { name: 'чечевица красная', category: 'бакалея' },
    28: { name: 'твердый сыр', category: 'молочка' },
    29: { name: 'бекон', category: 'мясо' },
    30: { name: 'яйца', category: 'молочка' },
    31: { name: 'крахмал', category: 'бакалея' },
    32: { name: 'майонез', category: 'молочка' },
    33: { name: 'зеленый горошек', category: 'бакалея' },
    34: { name: 'вареная колбаса', category: 'колбасы' },
    35: { name: 'соленые огурцы', category: 'бакалея' },
    36: { name: 'копченая колбаса', category: 'колбасы' },
    37: { name: 'мелкие макароны', category: 'бакалея' },
    38: { name: 'каперсы', category: 'бакалея' },
    39: { name: 'лимон', category: 'овощи' },
    40: { name: 'зира', category: 'бакалея' },
    41: { name: 'барбарис', category: 'бакалея' },
    42: { name: 'куркума', category: 'бакалея' },
    43: { name: 'кабачок', category: 'овощи' },
    44: { name: 'куринная грудка', category: 'мясо' },
    45: { name: 'панировочные сухари', category: 'бакалея' },
    46: { name: 'пармезан', category: 'молочка' },
    47: { name: 'шампиньоны', category: 'грибы' },
    48: { name: 'фольга', category: 'другое' },
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
