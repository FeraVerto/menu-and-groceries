import { Router } from 'express';
import { addDish } from '../controllers/dish.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/addDish
router.post(`/menu-and-groceries/addDish`, addDish);

export default router;
