import { Router } from 'express';
import {
  login,
  logout,
  register,
  checkAuth,
  refreshAccessToken,
} from '../controllers/auth.js';

const router = Router();

//http://localhost:3000/menu-and-groceries/auth/login
router.post('/menu-and-groceries/auth/login', login);

//http://localhost:3000/menu-and-groceries/auth/logout
router.post('/menu-and-groceries/auth/logout', logout);

//http://localhost:3000/menu-and-groceries/auth/register
router.post('/menu-and-groceries/auth/register', register);

//http://localhost:3000/menu-and-groceries/auth/check
router.post('/auth/check', checkAuth);

//http://localhost:3000/menu-and-groceries/auth/refresh
router.get('/auth/refresh', refreshAccessToken);

export default router;
