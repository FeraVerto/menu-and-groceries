import { Router } from 'express';
import { getIngredients } from '../controllers/ingredients.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/ingredients
router.get(`/menu-and-groceries/ingredients`, getIngredients);

export default router;
