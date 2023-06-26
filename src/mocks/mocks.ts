//libraries
import MockAdapter from 'axios-mock-adapter';
import { instance } from './../api/axios';
//assets
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

export const createMock = () => {
  let mock = new MockAdapter(instance);
  return {
    getMenu: mock.onGet('/menu-and-groceries/dishes').reply(200, {
      dataDishes: [
        {
          name: 'Новые блюда',
          dishes: [
            {
              id: '0-1',
              link: '',
              image: '',
              dishName: '',
              ingredients: [],
            },
          ],
        },
        {
          name: 'Супы',
          dishes: [
            {
              id: '1-1',
              link: 'https://www.say7.info/cook/recipe/259-Borsch.html',
              image: borsh,
              dishName: 'Борщ',
              ingredients: [
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'свежая капуста', category: 'овощи', id: '15' },
                { name: 'свекла', category: 'овощи', id: '16' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'томатная паста', category: 'бакалея', id: '19' },
                { name: 'уксус 6%', category: 'бакалея', id: '20' },
                { name: 'чеснок', category: 'овощи', id: '21' },
                { name: 'лавровый лист', category: 'бакалея', id: '22' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'зелень', category: 'овощи', id: '26' },
              ],
              tags: ['1', '2', '3'],
            },

            {
              id: '1-2',
              image: che,
              dishName: 'Суп с чечевицей и беконом',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'чечевица красная', category: 'бакалея', id: '27' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'бекон', category: 'мясо', id: '29' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '1-3',
              image: vkusnosup,
              dishName: 'Вкусносуп с копченой колбасой',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'копченая колбаса', category: 'колбасы', id: '36' },
                { name: 'мелкие макароны', category: 'бакалея', id: '37' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '1-4',
              image: solanka,
              link: 'https://www.say7.info/cook/recipe/258-Solyanka-myasnaya.html',
              dishName: 'Солянка',
              ingredients: [
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'томатная паста', category: 'бакалея', id: '19' },
                { name: 'копченая колбаса', category: 'колбасы', id: '36' },
                { name: 'соленые огурцы', category: 'бакалея', id: '35' },
                { name: 'каперсы', category: 'бакалея', id: '38' },
                { name: 'лавровый лист', category: 'бакалея', id: '22' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'лимон', category: 'овощи', id: '39' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '1-5',
              image: sup_guliash,
              link: 'https://www.instagram.com/p/Banzdxtlai3/',
              dishName: 'Суп-гуляш',
              ingredients: [
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'томатная паста', category: 'бакалея', id: '19' },
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'бекон', category: 'мясо', id: '29' },
                { name: 'перец болгарский', category: 'овощи', id: '69' },
                { name: 'чеснок', category: 'овощи', id: '21' },
                { name: 'картофель', category: 'овощи', id: '14' },
                {
                  name: 'консервированная фасоль',
                  category: 'бакалея',
                  id: '70',
                },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'лавровый лист', category: 'бакалея', id: '22' },
                { name: 'паприка', category: 'бакалея', id: '71' },
                { name: 'оливковое масло', category: 'бакалея', id: '5' },
                { name: 'лимон', category: 'овощи', id: '39' },
                { name: 'кинза', category: 'овощи', id: '72' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '1-6',
              image: okroshka,
              dishName: 'Окрошка',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'вареная колбаса', category: 'колбасы', id: '34' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'огурцы свежие', category: 'овощи', id: '74' },
                { name: 'сметана', category: 'молочка', id: '1' },
                { name: 'квас', category: 'напитки', id: '73' },
                { name: 'зелень', category: 'овощи', id: '26' },
              ],
              tags: [],
            },
            {
              id: '1-8',
              image: sup_s_lap,
              dishName: 'Куриный суп с лапшой',
              ingredients: [
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'макароны', category: 'бакалея', id: '78' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'бульонный кубик', category: 'бакалея', id: '89' },
              ],
              tags: [],
            },
            {
              id: '1-7',
              image: chihirtma,
              dishName: 'Чихиртма (пока без ингредиентов, рецепт в разработке)',
              ingredients: [],
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
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'зеленый горошек', category: 'бакалея', id: '33' },
                { name: 'вареная колбаса', category: 'колбасы', id: '34' },
                { name: 'соленые огурцы', category: 'бакалея', id: '35' },
                { name: 'майонез', category: 'молочка', id: '32' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '2-2',
              image: ogur_pomid,
              dishName: 'Салат с огурцами и помидорами',
              ingredients: [
                { name: 'огурцы свежие', category: 'овощи', id: '74' },
                { name: 'помидоры', category: 'овощи', id: '12' },
                { name: 'зелень', category: 'овощи', id: '26' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '2-3',
              image: seld_pod_shubij,
              link: 'https://www.youtube.com/watch?v=c5qx9agyo1s',
              dishName: 'Сельдь под шубой',
              ingredients: [
                { name: 'филе сельди', category: 'рыба', id: '75' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'свекла', category: 'овощи', id: '16' },
                { name: 'яблоки', category: 'овощи', id: '76' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'майонез', category: 'молочка', id: '32' },
                { name: 'яйца', category: 'молочка', id: '30' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '2-4',
              image: cezar,
              dishName: 'Цезарь с курицей',
              ingredients: [
                { name: 'салат айсберг', category: 'овощи', id: '83' },
                { name: 'помидоры черри', category: 'овощи', id: '85' },
                { name: 'майонез', category: 'молочка', id: '32' },
                { name: 'пармезан', category: 'молочка', id: '46' },
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'сухарики', category: 'бакалея', id: '84' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '2-5',
              image: vinegret,
              link: 'https://www.say7.info/cook/recipe/308-Vinegret.html',
              dishName: 'Винегрет',
              ingredients: [
                { name: 'свекла', category: 'овощи', id: '16' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'свежая капуста', category: 'овощи', id: '15' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
              ],
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
              link: 'https://www.say7.info/cook/recipe/127-Lazanya.html',
              dishName: 'Лазанья',
              ingredients: [
                { name: 'листы лазаньи', category: 'бакалея', id: '9' },
                { name: 'фарш куриный', category: 'мясо', id: '11' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'чеснок', category: 'овощи', id: '21' },
                { name: 'молоко', category: 'молочка', id: '4' },
                { name: 'сливочное масло', category: 'молочка', id: '3' },
                { name: 'мука', category: 'бакалея', id: '10' },
                { name: 'твердый сыр', category: 'молочка', id: '28' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-2',
              image: kartoshka,
              dishName: 'Жареная картошка',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-3',
              image: zero,
              dishName: 'Картофель пармезан',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'майонез', category: 'молочка', id: '32' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-4',
              image: plov,
              dishName: 'плов',
              link: 'https://www.say7.info/cook/recipe/118-Plov.html',
              ingredients: [
                { name: 'рис', category: 'бакалея', id: '7' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'зира', category: 'бакалея', id: '40' },
                { name: 'барбарис', category: 'бакалея', id: '41' },
                { name: 'куркума', category: 'бакалея', id: '42' },
                { name: 'чеснок', category: 'овощи', id: '21' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-5',
              image: ovoch,
              dishName: 'овощное рагу',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'свежая капуста', category: 'овощи', id: '15' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'помидоры', category: 'овощи', id: '12' },
                { name: 'кабачок', category: 'овощи', id: '43' },
                { name: 'томатная паста', category: 'бакалея', id: '19' },
                { name: 'зелень', category: 'овощи', id: '26' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-6',
              image: jul,
              link: 'https://www.say7.info/cook/recipe/500-ZHjulen-kuricey.html',
              dishName: 'жульен',
              ingredients: [
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'шампиньоны', category: 'грибы', id: '47' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'твердый сыр', category: 'молочка', id: '28' },
                { name: 'сливки', category: 'молочка', id: '2' },
                { name: 'сливочное масло', category: 'молочка', id: '3' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-7',
              image: kar_gar,
              link: 'https://www.say7.info/cook/recipe/606-Kartoshka-garmoshka.html',
              dishName: 'картошка-гармошка',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'бекон', category: 'мясо', id: '29' },
                { name: 'фольга', category: 'бытовая химия', id: '48' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '3-8',
              image: wok,
              dishName: 'Wok  с курицей',
              ingredients: [
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'терияки', category: 'бакалея', id: '66' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'лапша для вока', category: 'бакалея', id: '81' },
                { name: 'имбирь', category: 'овощи', id: '82' },
              ],
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
              ingredients: [
                { name: 'греча', category: 'бакалея', id: '6' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '5-2',
              image: rice,
              dishName: 'Рис без никто',
              ingredients: [
                { name: 'рис', category: 'бакалея', id: '7' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '5-3',
              image: bulgur,
              dishName: 'Булгур с морковью',
              ingredients: [
                { name: 'булгур', category: 'бакалея', id: '77' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '5-4',
              image: spagetti,
              dishName: 'Макароны (ассорти)',
              ingredients: [
                { name: 'макароны', category: 'бакалея', id: '78' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '5-5',
              image: pure,
              dishName: 'Картофельное пюре',
              ingredients: [
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'сливочное масло', category: 'молочка', id: '3' },
                { name: 'молоко', category: 'молочка', id: '4' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
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
              link: 'https://1000.menu/cooking/7474-rublennje-kotletj-iz-kurinogo-file',
              dishName: 'Котлеты куриные рубленные',
              ingredients: [
                { name: 'фарш куриный', category: 'мясо', id: '11' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'крахмал', category: 'бакалея', id: '31' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '4-2',
              image: kurva_sir,
              link: 'https://www.say7.info/cook/recipe/1104-Kurinoe-file.html',
              dishName: 'куриное филе в сырной корочке',
              ingredients: [
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'панировочные сухари', category: 'бакалея', id: '45' },
                { name: 'пармезан', category: 'молочка', id: '46' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '4-3',
              image: guliash,
              link: 'https://1000.menu/cooking/33240-gulyash-iz-govyadiny-s-podlivkoi-klassicheskii',
              dishName: 'Гуляш из говядины',
              ingredients: [
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'помидоры', category: 'овощи', id: '12' },
                { name: 'мука', category: 'бакалея', id: '10' },
                { name: 'кетчуп', category: 'бакалея', id: '58' },
                { name: 'оливковое масло', category: 'бакалея', id: '5' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '4-4',
              image: kur_grud,
              dishName: 'Куриная грудка жаренная',
              ingredients: [
                { name: 'куринная грудка', category: 'мясо', id: '44' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'паприка', category: 'бакалея', id: '71' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'чесночный порошок', category: 'бакалея', id: '79' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '4-5',
              image: losos,
              dishName: 'Стейк из лосося жареный',
              ingredients: [
                { name: 'лосось', category: 'рыба', id: '80' },
                { name: 'соль', category: 'бакалея', id: '23' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '4-6',
              image: burgund,
              link: 'https://steaklovers.menu/food/41080',
              dishName: 'Говядина по-бургундски',
              ingredients: [
                { name: 'оливковое масло', category: 'бакалея', id: '5' },
                { name: 'бекон', category: 'мясо', id: '29' },
                { name: 'говядина', category: 'мясо', id: '13' },
                { name: 'морковь', category: 'овощи', id: '17' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'чеснок', category: 'овощи', id: '21' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'перец', category: 'бакалея', id: '24' },
                { name: 'мука', category: 'бакалея', id: '10' },
                { name: 'томатная паста', category: 'бакалея', id: '19' },
                { name: 'лавровый лист', category: 'бакалея', id: '22' },
                { name: 'шампиньоны', category: 'грибы', id: '47' },
                { name: 'красное вино', category: 'алкоголь', id: '90' },
                { name: 'тимьян', category: 'овощи', id: '92' },
                { name: 'сливочное масло', category: 'молочка', id: '3' },
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
              ingredients: [
                { name: 'тесто', category: 'тесто', id: '57' },
                { name: 'картофель', category: 'овощи', id: '14' },
                { name: 'твердый сыр', category: 'молочка', id: '28' },
                { name: 'лук', category: 'овощи', id: '18' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'ветчина', category: 'колбасы', id: '86' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '6-2',
              image: bliny,
              dishName: 'Блины',
              ingredients: [
                { name: 'молоко', category: 'молочка', id: '4' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'растительное масло', category: 'бакалея', id: '25' },
                { name: 'мука', category: 'бакалея', id: '10' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'разрыхлитель', category: 'бакалея', id: '87' },
                { name: 'сахар', category: 'бакалея', id: '88' },
                { name: 'сгущенка', category: 'молочка', id: '62' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '6-3',
              image: pizza,
              dishName: 'Пицца по-клевакиевски',
              ingredients: [
                { name: 'тесто', category: 'тесто', id: '57' },
                { name: 'кетчуп', category: 'бакалея', id: '58' },
                { name: 'майонез', category: 'молочка', id: '32' },
                { name: 'бекон', category: 'мясо', id: '29' },
                { name: 'шампиньоны', category: 'грибы', id: '47' },
                { name: 'помидоры', category: 'овощи', id: '12' },
                { name: 'моцарелла', category: 'молочка', id: '56' },
              ],
              tags: ['1', '2', '3'],
            },
            {
              id: '6-4',
              image: syrniki,
              link: 'https://www.youtube.com/watch?v=wObrMxOtDbs',
              dishName: 'Сырники',
              ingredients: [
                { name: 'творог', category: 'молочка', id: '68' },
                { name: 'яйца', category: 'молочка', id: '30' },
                { name: 'мука', category: 'бакалея', id: '10' },
                { name: 'соль', category: 'бакалея', id: '23' },
                { name: 'сахар', category: 'бакалея', id: '88' },
                { name: 'манка', category: 'бакалея', id: '93' },
              ],
              tags: ['1', '2', '3'],
            },
          ],
        },
      ],
    }),
    getIngredients: mock.onGet('/menu-and-groceries/ingredients').reply(200, {
      ingredients: {
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
      },
    }),
  };
};