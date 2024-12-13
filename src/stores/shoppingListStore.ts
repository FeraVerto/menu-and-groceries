import { makeAutoObservable } from 'mobx';
import { ingredientsType } from './storeTypes';
import { fetchIngredients } from './service';
import { DishStore } from './dishStore';

export class ShoppingListStore {
  dishStore: DishStore;
  ingredients: ingredientsType = {};
  addedIngredientsId: string[] = [];
  deletedIngredientsId: string[] = [];
  dataToShowDeletedIngredients: { name: string; id: string }[] = [];
  shoppingList: {
    [key: string]: { name: string; id: string }[];
  } = {};

  constructor(dishStore: DishStore) {
    makeAutoObservable(this);
    this.dishStore = dishStore;
  }

  addIngredientsToCartList = (
    data: { name: string; category: string; id: string }[],
    dishName?: string,
    dishID?: string
  ) => {
    const dishes = this.dishStore.dishes;
    if (dishID && dishName) {
      dishes[dishID] = { dishName, ingredients: [] };
    }

    //формируем данные для отрисовки в модальном окне
    const result = data.reduce((acc, item) => {
      if (dishName && dishID) {
        dishes[dishID]?.ingredients?.push(item.id);
      }
      //заполняем массив актуальных id
      if (!this.addedIngredientsId.includes(item.id)) {
        this.addedIngredientsId.push(item.id);

        if (!acc[item.category]) {
          acc[item.category] = [{ name: item.name, id: item.id }];
        } else {
          acc[item.category]?.push({ name: item.name, id: item.id });
        }

        //удаляем id из массива удаленных ингредиентовб если они там есть
        this.deletedIngredientsId = this.deletedIngredientsId.filter(
          (id) => id !== item.id
        );
        //удаляем ингредиент из массива для отображения
        this.dataToShowDeletedIngredients =
          this.dataToShowDeletedIngredients.filter((ing) => ing.id !== item.id);

        return acc;
      } else {
        return acc;
      }
    }, {} as { [key: string]: [{ name: string; id: string }] });

    //если _shoppingList уже есть такая категория, то
    //добавляем ингредиент к существующей категории, иначе создаем новую категорию
    //c новым ингредиентом
    for (let category in result) {
      if (this.shoppingList.hasOwnProperty(category)) {
        this.shoppingList[category].push(...result[category]);
      } else {
        this.shoppingList[category] = result[category];
      }
    }

    return;
  };

  deleteIngredients = (
    ingredientsId: string[] | [],
    type?: 'dish',
    dishID?: string
  ) => {
    const dishes = this.dishStore.dishes;
    if (type === 'dish' && dishID) {
      //если добавлено несколько блюд, а затем мы удаляем одно из них,
      //то проверяем, чтобы не удалились ингредиенты, которые входят в другие блюда
      for (let key in dishes) {
        if (key !== dishID) {
          ingredientsId = dishes[dishID].ingredients.filter(
            (id) => !dishes[key].ingredients.includes(id)
          );
        }
      }

      delete dishes[dishID];
    }

    //добавляем id в массив удалённых ингредиентов
    this.deletedIngredientsId = [
      ...this.deletedIngredientsId,
      ...ingredientsId,
    ];

    ingredientsId.forEach((id) => {
      //условие для продуктов, которые не входят в блюда (селект)
      const ingredient = this.ingredients[id]; //{name: 'говядина', category: 'мясо'}
      const categoryIngredient = ingredient?.category;

      //удаляем элементы из списка добавленных продуктов
      const filteredData = this.shoppingList[categoryIngredient]?.filter(
        (ingredient) => {
          return ingredient.id !== id;
        }
      );
      this.shoppingList[categoryIngredient] = filteredData;

      //если в категории нет продуктов, удаляем категорию
      if (
        this.shoppingList[categoryIngredient]?.length === 0 ||
        !this.shoppingList[categoryIngredient]
      ) {
        delete this.shoppingList[categoryIngredient];
      }

      //удаляем id из добавленных продуктов
      this.addedIngredientsId = this.addedIngredientsId.filter(
        (item) => item !== id
      );

      //добавляем продукт в массив удаленных продуктов
      this.dataToShowDeletedIngredients.push({
        name: ingredient?.name,
        id,
      });
    });
    return;
  };

  //добавление отдельных продуктов(!) из селекта в модальном окне
  //в актуальный список ингредиентов
  addIngredientFromSelection = (
    data: { id: string; name: string; category: string }[]
  ) => {
    if (data.length === 0) {
      return null;
    }

    data.forEach((item) => {
      //проверяем есть ли уже ингредиент с таким id
      if (!this.addedIngredientsId.includes(item.id.toString())) {
        //можно добавить предупреждение, что такой продукт уже есть

        if (!this.shoppingList[item.category]) {
          this.shoppingList[item.category] = [{ name: item.name, id: item.id }];
        } else {
          this.shoppingList[item.category]?.push({
            name: item.name,
            id: item.id,
          });
        }
        this.addedIngredientsId = [...this.addedIngredientsId, item.id];

        //пока дублирование
        //удаляем id из массива удаленных ингредиентов
        this.deletedIngredientsId = this.deletedIngredientsId.filter(
          (id) => id !== item.id
        );
        //удаляем ингредиент из массива для отображения
        this.dataToShowDeletedIngredients =
          this.dataToShowDeletedIngredients.filter((ing) => ing.id !== item.id);
      }
    });
  };

  setIngredients = (data: ingredientsType) => {
    this.ingredients = data;
  };

  loadIngredients = () => {
    fetchIngredients(this.setIngredients.bind(this));
  };
}
