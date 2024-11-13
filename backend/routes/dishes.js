import { Router } from 'express';
import { getDishes } from '../controllers/dishes.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/menu/dishes/:id
router.get(`/menu-and-groceries/menu/dishes/:id`, getDishes);

export default router;
