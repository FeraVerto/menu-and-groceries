export type userType = {
  username: string;
  id: string;
  botToken: string;
  chatId: number[];
  isAuth: boolean;
};

export type userDataResponse = { username: string; userId: string };

export interface ErrorResponse {
  status?: number;
  message: string;
}

export type userDataError = {
  error: string | undefined;
};

export type ingrediendsDataPayload = {
  name: string;
  category: string;
  id: string;
};

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
  //скорее всего не надо
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
  sectionId: string;
  image: string;
  ingredients: number[];
  link: string;
};
