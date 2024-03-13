export type userType = { id: string; botToken: string; chatId: number[] };

//переименовать
export type dishType = {
  id: string;
  image: string;
  link?: string;
  dishName: string;
  menuSection: string;
  ingredients: { name: string; category: string; id: string }[];
  tags: string[];
};

export type sectionListType = {
  id: string;
  sectionName: string;
};

export type categoriesType = {
  id: string;
  sectionName: string;
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

//переименовать
export type dishDataType = {
  dishName: string;
  menuSection: string;
  image: {};
  ingredients: number[];
  link: string;
};
