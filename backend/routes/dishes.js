import { Router } from 'express';
import { getDishes, postDishes } from '../controllers/dishes.js';
import passport from 'passport';

const router = Router();

//http://localhost:3000/menu-and-groceries/menu/dishes/:id
router.get(
  `/menu-and-groceries/menu/dishes/:id`,
  passport.authenticate('jwt', { session: false }),
  getDishes
);
//http://localhost:3000/menu-and-groceries/menu/dishes
router.post(
  `/menu-and-groceries/dishes`,
  passport.authenticate('jwt', { session: false }),
  postDishes
);

export default router;
