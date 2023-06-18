export type userType = { id: string; botToken: string; chatId: number[] };

export type dishType = {
  id: string;
  image: string;
  dishName: string;
  ingredients: { name: string; category: string; id: string }[];
  tags: string[];
};

export type categoriesType = {
  name: string;
  dishes: dishType[];
};

export type ingredientsType = {
  [id: string]: {
    name: string;
    category: string;
  };
};

export type ingredientsDishes = { [key: string]: string[] };

export type productsList = { [key: string]: { name: string; id: string }[] };
