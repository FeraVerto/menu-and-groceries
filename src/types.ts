export type dishesType = {
  id: string;
  image: string;
  dishName: string;
  ingredients: string[];
  tags: string[];
}[];

export type categoryType = {
  name: string;
  dishes: dishesType;
  igd: ingredientsType;
};

export type categoriesType = {
  name: string;
  dishes: dishesType;
}[];

export type ingredientsType = {
  [id: string]: {
    name: string;
    category: string;
  };
};

export type optionsType = { value: string; label: string };

export type ResultType = {
  ok: boolean;
  result: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    };
    chat: {
      id: number;
      first_name: string;
      last_name: string;
      username: string;
      type: string;
    };
    date: number;
    text: string;
  };
};

export type userType = { id: string; botToken: string; chatId: number };
