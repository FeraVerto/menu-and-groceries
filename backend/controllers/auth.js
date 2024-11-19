import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { keys } from '../config/keys.js';

export const login = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });

  //не работает с compareSync
  if (existingUser) {
    const passwordResult = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (passwordResult) {
      const token = jwt.sign(
        {
          username: existingUser.username,
          userId: existingUser._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
          // secure: true,
          maxAge: 360000,
          sameSite: 'Lax',
        })
        .json({ username: req.body.username, userId: existingUser._id });
    } else {
      res.status(401).json({
        message: 'Неверный пароль',
      });
    }
  } else {
    res.status(404).json({
      message: 'Пользователь с таким Nickname не найден',
    });
  }
};

export const register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const password = req.body.password;
  const existingUser = await User.findOne({ username: req.body.username });

  if (existingUser) {
    return res.status(409).json({ error: 'Username already exists' });
  } else {
    const user = new User({
      username: req.body.username,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();
      res.status(201).json({ isUserCreated: true });
    } catch (e) {
      //обработать ошибку
    }
  }
  //   .catch((error) => {
  //     res.status(500).json({ error: 'Failed to create user' });
  //   });
};

export const checkAuth = async (req, res) => {
  const token = req.cookies?.access_token;
  console.log('token', token);

  if (!token) {
    return res.status(401).json({
      message: 'Не авторизован',
    });
  }

  try {
    const decoded = await jwt.verify(token, keys.jwt);

    return res.status(200).json({
      username: decoded.username,
      userId: decoded.userId,
    });
  } catch (e) {}
};
