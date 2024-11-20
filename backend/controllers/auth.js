import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { keys } from '../config/keys.js';
import { generateTokens } from '../utils/generateToken.js';

export const login = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });

  //не работает с compareSync
  if (existingUser) {
    const passwordResult = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (passwordResult) {
      const tokens = generateTokens({
        username: req.body.username,
        userId: existingUser._id,
      });

      res.cookie('access_token', tokens.access_token, {
        httpOnly: true,
        secure: true,
        maxAge: 15 * 60 * 1000,
        sameSite: 'Lax',
      });

      res.cookie('refresh_token', tokens.refresh_token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'Lax',
      });

      res
        .status(200)
        .json({ username: req.body.username, userId: existingUser._id });
    } else {
      res.status(401).json({
        message: 'Неверный логин или пароль',
      });
    }
  } else {
    res.status(404).json({
      message: 'Пользователь с таким username не найден',
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

  if (!token) {
    return res.status(401).json({
      message: 'Не авторизован',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).json({
      username: decoded.username,
      userId: decoded.userId,
    });
  } catch (e) {}
};

export const refreshAccessToken = async (req, res) => {
  const refreshToken = req.cookies?.refresh_token;

  if (!refreshToken) {
    //отправить ошибку
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const tokens = generateTokens({
      userId: decoded.userId,
      username: decoded.username,
    });

    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
      secure: true,
      maxAge: 15 * 60 * 1000,
      sameSite: 'Lax',
    });

    res.status(204).end();
  } catch (e) {}
};
