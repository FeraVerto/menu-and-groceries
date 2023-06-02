//libraries
import { observer } from 'mobx-react-lite';
//styles
import stl from './Category.module.css';
//components
import { Button } from '../../../../Components/Button/Button';
//types
import { categoryType } from '../../../../types';
//store
import Store from '../../../../store/store';

export const Category = observer(({ name, dishes, igd }: categoryType) => {
  const { addProductsToCartList } = Store;

  const addProductsToCart = (
    ingredients: string[],
    id: string,
    dishName: string
  ) => {
    addProductsToCartList(ingredients, dishName);
  };

  let dishesList = dishes.map((m) => (
    <li className={stl.dishes_item} key={m.id}>
      <div>
        <div className={stl.image_wrapper}>
          <img src={m.image} alt="add to cart button" />
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
        <Button
          width={'100%'}
          height={'60px'}
          text={'Добавить в корзину'}
          onClick={() => addProductsToCart(m.ingredients, m.id, m.dishName)}
        />
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
