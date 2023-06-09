//временно
//всё это будет на бэке
import {
  solanka,
  okroshka,
  vkusnosup,
  ogur_pomid,
  seld_pod_shubij,
  grecha,
  rice,
  bulgur,
  spagetti,
  pure,
  guliash,
  losos,
  wok,
  chihirtma,
  cezar,
  pirog,
  bliny,
  vinegret,
  sup_s_lap,
  burgund,
  pizza,
  syrniki,
  borsh,
  che,
  lazania,
  kartoshka,
  zero,
  kar_gar,
  kurva,
  kurva_sir,
  kur_grud,
  plov,
  jul,
  ovoch,
  olivie,
  sup_guliash,
} from './../assets/imports';

export const categoriesData = [
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
        image: vkusnosup,
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
      {
        id: '1-6',
        image: okroshka,
        dishName: 'Окрошка',
        ingredients: ['14', '34', '30', '74', '1', '73', '26'],
        tags: [],
      },
      {
        id: '1-7',
        image: chihirtma,
        dishName: 'Чихиртма (пока без ингредиентов, рецепт в разработке)',
        ingredients: [],
        tags: [],
      },
      {
        id: '1-8',
        image: sup_s_lap,
        dishName: 'Куриный суп с лапшой',
        ingredients: ['44', '78', '17', '18', '23', '25', '14', '89'],
        tags: [],
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
      {
        id: '2-2',
        image: ogur_pomid,
        dishName: 'Салат с огурцами и помидорами',
        ingredients: ['74', '12', '26'],
        tags: ['1', '2', '3'],
      },
      {
        id: '2-3',
        image: seld_pod_shubij,
        dishName: 'Сельдь под шубой',
        ingredients: ['75', '14', '17', '16', '76', '18', '32', '30'],
        tags: ['1', '2', '3'],
      },
      {
        id: '2-4',
        image: cezar,
        dishName: 'Цезарь с курицей',
        ingredients: ['83', '85', '32', '46', '44', '84'],
        tags: ['1', '2', '3'],
      },
      {
        id: '2-5',
        image: vinegret,
        dishName: 'Винегрет',
        ingredients: ['16', '17', '14', '15', '18', '23', '25'],
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
      {
        id: '3-8',
        image: wok,
        dishName: 'Wok  с курицей',
        ingredients: ['44', '66', '23', '17', '18', '81', '82'],
        tags: ['1', '2', '3'],
      },
    ],
  },
  {
    name: 'Гарнир',
    dishes: [
      {
        id: '5-1',
        image: grecha,
        dishName: 'Греча с морковью и луком (или без лука)',
        ingredients: ['6', '17', '18', '23'],
        tags: ['1', '2', '3'],
      },
      {
        id: '5-2',
        image: rice,
        dishName: 'Рис без никто',
        ingredients: ['7', '23'],
        tags: ['1', '2', '3'],
      },
      {
        id: '5-3',
        image: bulgur,
        dishName: 'Булгур с морковью',
        ingredients: ['77', '17', '23'],
        tags: ['1', '2', '3'],
      },
      {
        id: '5-4',
        image: spagetti,
        dishName: 'Макароны (ассорти)',
        ingredients: ['78', '23'],
        tags: ['1', '2', '3'],
      },
      {
        id: '5-5',
        image: pure,
        dishName: 'Картофельное пюре',
        ingredients: ['14', '17', '3', '4', '18', '23'],
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
      {
        id: '4-3',
        image: guliash,
        dishName: 'Гуляш из говядины',
        ingredients: ['13', '18', '12', '10', '58', '5', '23', '24'],
        tags: ['1', '2', '3'],
      },
      {
        id: '4-4',
        image: kur_grud,
        dishName: 'Куриная грудка жаренная',
        ingredients: ['44', '25', '71', '23', '24', '79'],
        tags: ['1', '2', '3'],
      },
      {
        id: '4-5',
        image: losos,
        dishName: 'Стейк из лосося жареный',
        ingredients: ['80', '23'],
        tags: ['1', '2', '3'],
      },
      {
        id: '4-6',
        image: burgund,
        dishName: 'Говядина по-бургундски',
        ingredients: [
          '5',
          '29',
          '13',
          '17',
          '18',
          '21',
          '23',
          '24',
          '10',
          '19',
          '22',
          '47',
          '90',
          '92',
          '3',
        ],
        tags: ['1', '2', '3'],
      },
    ],
  },
  {
    name: 'Выпечка',
    dishes: [
      {
        id: '6-1',
        image: pirog,
        dishName: 'Пирог с картошкой',
        ingredients: ['57', '14', '28', '18', '25', '23', '86'],
        tags: ['1', '2', '3'],
      },
      {
        id: '6-2',
        image: bliny,
        dishName: 'Блины',
        ingredients: ['4', '30', '25', '10', '23', '87', '88', '62'],
        tags: ['1', '2', '3'],
      },
      {
        id: '6-3',
        image: pizza,
        dishName: 'Пицца по-клевакиевски',
        ingredients: ['57', '58', '32', '29', '47', '12', '56'],
        tags: ['1', '2', '3'],
      },
      {
        id: '6-4',
        image: syrniki,
        dishName: 'Сырники',
        ingredients: ['68', '30', '10', '23', '88', '93'],
        tags: ['1', '2', '3'],
      },
    ],
  },
];

export const ingredientsData: {
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
  73: { name: 'квас', category: 'напитки' },
  74: { name: 'огурцы свежие', category: 'овощи' },
  75: { name: 'филе сельди', category: 'рыба' },
  76: { name: 'яблоки', category: 'овощи' },
  77: { name: 'булгур', category: 'бакалея' },
  78: { name: 'макароны', category: 'бакалея' },
  79: { name: 'чесночный порошок', category: 'бакалея' },
  80: { name: 'лосось', category: 'рыба' },
  81: { name: 'лапша для вока', category: 'бакалея' },
  82: { name: 'имбирь', category: 'овощи' },
  83: { name: 'салат айсберг', category: 'овощи' },
  84: { name: 'сухарики', category: 'бакалея' },
  85: { name: 'помидоры черри', category: 'овощи' },
  86: { name: 'ветчина', category: 'колбасы' },
  87: { name: 'разрыхлитель', category: 'бакалея' },
  88: { name: 'сахар', category: 'бакалея' },
  89: { name: 'бульонный кубик', category: 'бакалея' },
  90: { name: 'красное вино', category: 'алкоголь' },
  91: { name: 'белое вино', category: 'алкоголь' },
  92: { name: 'тимьян', category: 'овощи' },
  93: { name: 'манка', category: 'бакалея' },
};
