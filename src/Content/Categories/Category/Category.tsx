import { categoryType } from '../../../types';
import stl from './Category.module.css';
import Store from '../../../store/store';
import { observer } from 'mobx-react-lite';

export const Category = observer(({ name, dishes, igd }: categoryType) => {
  const { addToCart } = Store;

  const addProductsToBasket = (ingredients: string[], id: string) => {
    addToCart(ingredients);
  };

  let dishesList = dishes.map((m) => (
    <li className={stl.dishes_item} key={m.id}>
      <div>
        <div className={stl.image_wrapper}>
          <img src={m.image} />
        </div>
        <div className={stl.dishes_info}>
          <div className={stl.dishes_info_name}>{m.dishName}</div>
          <div className={stl.ingredients}>
            {m.ingredients.map((n) => (
              <div key={n}>{igd[n].name},&nbsp;</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          className={stl.button_add}
          onClick={() => addProductsToBasket(m.ingredients, m.id)}
        >
          Добавить в корзину
        </div>
      </div>
    </li>
  ));

  return (
    <div className={stl.categories}>
      <div className={stl.category_name}>{name}</div>
      <ul className={stl.category_dishes_list}>{dishesList}</ul>
    </div>
  );
});
