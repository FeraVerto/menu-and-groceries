import { Router } from 'express';
import { login, register, checkAuth } from '../controllers/auth.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/auth/login
router.post('/menu-and-groceries/auth/login', login);

//http://localhost:3000/menu-and-groceries/auth/register
router.post('/menu-and-groceries/auth/register', register);

//http://localhost:3000/menu-and-groceries/auth/check
router.post('/auth/check', checkAuth);

export default router;