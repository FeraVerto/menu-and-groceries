import mongoose from 'mongoose';
const { Schema } = mongoose;

const dishSchema = new Schema({
  dishName: {
    type: String,
    require: true,
  },
  link: {
    type: String,
  },
  image: {
    //type: String,
  },
  ingredients: [
    {
      ref: 'ingredient',
      type: Schema.Types.ObjectId,
      require: true,
    },
  ],
  section: {
    type: Schema.Types.ObjectId,
    ref: 'section',
    require: true,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model('dish', dishSchema);

// {
//   id: '181',
//   link: 'https://www.instagram.com/p/CrDYmbTNW07/',
//   image: orange,
//   dishName: 'Пряная курочка в апельсинах',
//   ingredients: [
//     { name: 'куринная грудка', category: 'мясо', id: '44' },
//     { name: 'чеснок', category: 'овощи', id: '21' },
//     { name: 'масло оливковое', category: 'бакалея', id: '5' },
//     { name: 'соевый соус', category: 'бакалея', id: '94' },
//     { name: 'паприка', category: 'бакалея', id: '71' },
//     { name: 'имбирь', category: 'овощи', id: '82' },
//     { name: 'куркума', category: 'бакалея', id: '42' },
//     { name: 'перец чёрный', category: 'бакалея', id: '24' },
//     { name: 'кари', category: 'бакалея', id: '95' },
//     { name: 'розмарин', category: 'бакалея', id: '96' },
//     { name: 'апельсины', category: 'овощи', id: '97' },
//   ],
// },
