import { Router } from 'express';
import { login, register } from '../controllers/auth.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/auth/login
router.post('/menu-and-groceries/auth/login', login);

//http://localhost:3000/menu-and-groceries/auth/register
router.post('/menu-and-groceries/auth/register', register);

export default router;
