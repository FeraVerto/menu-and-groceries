import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { keys } from '../config/keys.js';

export const login = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });

  //не работает с compareSync
  if (existingUser) {
    const passwordResult = bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (passwordResult) {
      const token = jwt.sign(
        {
          nickname: existingUser.nickname,
          userId: existingUser._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      res.status(200).json({
        token: `Bearer ${token}`,
      });
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
  //name password
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
      res.status(201).json(user);
    } catch (e) {
      //обработать ошибку
    }
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).json({ message: 'User created successfully' });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: 'Failed to create user' });
  //   });
};
