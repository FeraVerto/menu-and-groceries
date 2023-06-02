//libraries
import { makeAutoObservable } from 'mobx';
//временно
//всё это будет на бэке
import lazania from './../assets/images/лазанья.jpg';
import kartoshka from './../assets/images/жареная картошка.jpg';
import borsh from './../assets/images/борщ.jpg';
import che from './../assets/images/чечевичный суп с беконом.jpg';
import zero from './../assets/images/zero.jpg';
import kar_gar from './../assets/images/крошка картошка.jpg';
import solanka from './../assets/images/solanka.jpg';
import olivie from './../assets/images/olivie.jpg';
import plov from './../assets/images/плов.jpg';
import jul from './../assets/images/jul.jpg';
import ovoch from './../assets/images/овощное рагу.jpg';
import kurva from './../assets/images/kurva.jpg';
import kurva_sir from './../assets/images/kurva_sir.jpg';
import sup_guliash from './../assets/images/sup_guliash.jpg';
//utils
import { getUniqeElements } from '../utils/getUniqeElements';
//types
import { userType } from '../types';

class StoreApp {
  user: userType = {
    id: '1',
    botToken: '6',
    chatId: 2,
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
        {
          id: '1-5',
          image: sup_guliash,
          dishName: 'Суп-гуляш',
          ingredients: [
            '18',
            '17',
            '19',
            '13',
            '29',
            '69',
            '21',
            '14',
            '70',
            '23',
            '24',
            '22',
            '71',
            '5',
            '39',
            '72',
          ],
          tags: ['1', '2', '3'],
        },
        // {
        //   id: '1-6',
        //   image: solanka,
        //   dishName: 'Окрошка',
        //   ingredients: [],
        //   tags: ['1', '2', '3'],
        // },
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
    48: { name: 'фольга', category: 'бытовая химия' },
    49: { name: 'конфеты', category: 'сладости' },
    50: { name: 'бумажные полотенца', category: 'бытовая химия' },
    51: { name: 'прокладки', category: 'бытовая химия' },
    52: { name: 'мусорные пакеты', category: 'бытовая химия' },
    53: { name: 'шампунь', category: 'бытовая химия' },
    54: { name: 'гель для душа', category: 'бытовая химия' },
    55: { name: 'фольга для выпечки', category: 'бытовая химия' },
    56: { name: 'моцарелла', category: 'молочка' },
    57: { name: 'тесто', category: 'тесто' },
    58: { name: 'кетчуп', category: 'бакалея' },
    59: { name: 'минералка', category: 'напитки' },
    60: { name: 'пельмени', category: 'заморозка' },
    61: { name: 'средство для посуды', category: 'бытовая химия' },
    62: { name: 'сгущенка', category: 'молочка' },
    63: { name: 'фасоль', category: 'бакалея' },
    64: { name: 'ватные диски', category: 'бытовая химия' },
    65: { name: 'лепешки', category: 'хлеб' },
    66: { name: 'терияки', category: 'бакалея' },
    67: { name: 'чай', category: 'бакалея' },
    68: { name: 'творог', category: 'молочка' },
    69: { name: 'перец болгарский', category: 'овощи' },
    70: { name: 'консервированная фасоль', category: 'бакалея' },
    71: { name: 'паприка', category: 'бакалея' },
    72: { name: 'кинза', category: 'овощи' },
  };

  deletedProductsId: string[] = [];
  deletedProductsList: { [key: string]: { name: string; id: string }[] } = {};

  addedProductsId: string[] = [];
  addedProductsList: { [key: string]: { name: string; id: string }[] } = {};

  dishesListNameForSend: string[] = [];

  addProductsToCartList = (data: string[], dishName?: string) => {
    //Список выбранных блюд
    if (dishName) {
      this.dishesListNameForSend = [...this.dishesListNameForSend, dishName];
      this.dishesListNameForSend = getUniqeElements(this.dishesListNameForSend);
    }
    this.addedProductsId = [...this.addedProductsId, ...data];

    //убираем дублирующиеся элементы, если они присутствуют в двух разных блюдах
    this.addedProductsId = getUniqeElements(this.addedProductsId);

    let listOfProducts = generateListOfProducts(
      this.addedProductsId,
      this.ingredients
    );

    data.forEach((id) => {
      const category = this.ingredients[id].category;

      //удаляем продукты из основного списка
      if (this.deletedProductsList[category]?.length > 0) {
        this.deletedProductsList[category] = this.deletedProductsList[
          category
        ]?.filter((item) => item.id !== id);
      }

      //удаляем id из основного списка айдишников
      this.deletedProductsId = this.deletedProductsId?.filter(
        (item) => item !== id
      );

      //если в категории нет продуктов, удаляем категорию
      if (this.deletedProductsList[category]?.length === 0) {
        delete this.deletedProductsList[category];
      }
    });

    return (this.addedProductsList = {
      ...this.addedProductsList,
      ...listOfProducts,
    });
  };

  deleteProductFromList = (id: string) => {
    //перемещаем удаленные из списка продукты в другой список,
    //который поместим внизу, относительно основного списка в модальном окне
    this.deletedProductsId = [...this.deletedProductsId, id];
    let data = generateListOfProducts(this.deletedProductsId, this.ingredients);
    this.deletedProductsList = {
      ...this.deletedProductsList,
      ...data,
    };

    //удаляем продукты из основного списка
    const category = this.ingredients[id].category;
    this.addedProductsList[category] = this.addedProductsList[category].filter(
      (item) => item.id !== id
    );

    //удаляем id из основного списка айдишников
    this.addedProductsId = this.addedProductsId.filter((item) => item !== id);

    //если в категории нет продуктов, удаляем категорию
    if (this.addedProductsList[category].length === 0) {
      delete this.addedProductsList[category];
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

//формируем из массива айдишников string[]
//объект вида { [key: string]: { name: string; id: string }[] }
const generateListOfProducts = (
  data: string[],
  ingredientsData: {
    [key: string]: {
      name: string;
      category: string;
    };
  }
) => {
  return data.reduce((acc, item) => {
    const category = ingredientsData[item].category;
    const name = ingredientsData[item].name;

    if (!acc[category]) {
      acc[category] = [{ name: name, id: item }];
    } else {
      acc[category]?.push({ name: name, id: item });
    }

    return acc;
  }, {} as { [key: string]: { name: string; id: string }[] });
};

export default new StoreApp();
