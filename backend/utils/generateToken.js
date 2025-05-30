import jwt from 'jsonwebtoken';

export const generateTokens = (user) => {
  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('Отсутствуют ключи');
  }

  const access_token = jwt.sign(
    {
      username: user.username,
      userId: user.userId.toString(),
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );

  const refresh_token = jwt.sign(
    {
      username: user.username,
      userId: user.userId.toString(),
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );

  return { access_token, refresh_token };
};
