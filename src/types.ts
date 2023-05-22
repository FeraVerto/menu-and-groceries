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
