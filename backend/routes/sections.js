import { Router } from 'express';
import { getSections, postSections } from '../controllers/sections.js';
import passport from 'passport';

const router = Router();

//http://localhost:3000/menu-and-groceries/menu/sections
router.get(
  '/menu-and-groceries/menu/sections',
  passport.authenticate('jwt', { session: false }),
  getSections
);

//временно
//http://localhost:3000/menu-and-groceries/menu/sections
router.post(
  '/menu-and-groceries/menu/sections',
  passport.authenticate('jwt', { session: false }),
  postSections
);

export default router;
