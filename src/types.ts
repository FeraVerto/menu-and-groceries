export type dishesType = {
  id: number;
  image: string;
  dishName: string;
  ingredients: number[];
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
