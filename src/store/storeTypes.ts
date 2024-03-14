export type userType = { id: string; botToken: string; chatId: number[] };

export type dishType = {
  //присвоить на сервере
  id: string;
  image: string;
  link?: string;
  dishName: string;
  menuSection: string;
  //присвоить на сервере
  sectionId: string;
  ingredients: { name: string; category: string; id: string }[];
  tags: string[];
};

export type sectionListType = {
  sectionId: string;
  sectionName: string;
};

export type categoriesType = {
  sectionId: string;
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

//для отправки на сервер
export type dishDataPayload = {
  dishName: string;
  menuSection: string;
  //либо новая секция (без id), либо секция из списка
  sectionId?: string;
  image: {};
  ingredients: number[];
  link: string;
};
