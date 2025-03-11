export const getIngredients = (req, res) => {
  res.status(200).json([
    { name: 'куринная грудка', category: 'мясо', id: '44' },
    { name: 'чеснок', category: 'овощи', id: '21' },
  ]);
  try {
  } catch (e) {
    res.status(500).json({ status: 500, error: 'Ошибка сервера' });
  }
};
