//libraries
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';

//const
import { keys } from './config/keys.js';
//routes
import authRoutes from './routes/auth.js';
import dishRoutes from './routes/dish.js';
import dishesRoutes from './routes/dishes.js';
import ingredientsRoutes from './routes/ingredients.js';
import sectionsRoutes from './routes/sections.js';
import configurePassport from './middleware/passport.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log('Монга подключена');
  })
  .catch((error) => {
    console.log('error');
  });

app.use(passport.initialize());
configurePassport(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(authRoutes);
app.use(dishRoutes);
app.use(dishesRoutes);
app.use(ingredientsRoutes);
app.use(sectionsRoutes);

app.listen(PORT);
