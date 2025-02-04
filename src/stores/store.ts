//libraries
import { helper } from '../utils/helper';
import UserStore from './userStore';
import { MenuStore } from './menuStore';
import { DishStore } from './dishStore';
import { ShoppingListStore } from './shoppingListStore';

class StoreApp {
  userStore: UserStore;
  menuStore: MenuStore;
  dishStore: DishStore;
  shoppingListStore: ShoppingListStore;

  constructor() {
    this.userStore = new UserStore();
    this.menuStore = new MenuStore();
    this.dishStore = new DishStore(this.menuStore);
    this.shoppingListStore = new ShoppingListStore(this.dishStore);
    // makeAutoObservable(this);
    //this.checkAuth();
  }

  get data() {
    return {
      //user
      user: this.userStore.user,
      isAuth: this.userStore.user.isAuth,
      isRegister: this.userStore.isRegister,
      //menu
      menu: this.menuStore.menu,
      sectionMenuList: this.menuStore.sectionMenuList,
      setSectionMenu: this.menuStore.setSectionMenu,
      setSectionsMenu: this.menuStore.setSectionsMenu,
      //dish
      dishes: this.dishStore.dishes,
      setNewDish: this.dishStore.sendDishItem,
      //shoppingList
      ingredients: this.shoppingListStore.ingredients,
      addedIngredientsId: this.shoppingListStore.addedIngredientsId,
      deletedIngredientsId: this.shoppingListStore.deletedIngredientsId,
      addIngredientsToCartList: this.shoppingListStore.addIngredientsToCartList,
      dataToShowDeletedIngredients:
        this.shoppingListStore.dataToShowDeletedIngredients,
      shoppingList: this.shoppingListStore.shoppingList,
      addIngredientFromSelection:
        this.shoppingListStore.addIngredientFromSelection,
      deleteIngredients: this.shoppingListStore.deleteIngredients,
    };
  }
}

export default new StoreApp();
