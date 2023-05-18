import { categoryType } from '../../../types';
import stl from './Category.module.css';

//временно
export const Category = ({ name, dishes, igd }: categoryType) => {
  const addProductsToBasket = (ingredients: number[]) => {
    console.log('ing', ingredients);
    return;
  };

  let dishesList = dishes.map((m) => (
    <div className={stl.dishes_item} key={m.id}>
      <div
        className={stl.button_add}
        onClick={() => addProductsToBasket(m.ingredients)}
      >
        Добавить в корзину
      </div>
      <div className={stl.image_wrapper}>
        <img src={m.image} />
      </div>
      <div className={stl.dishes_info}>
        <div className={stl.dishes_info_name}>{m.dishName}</div>
        <div className={stl.ingredients}>
          {m.ingredients.map((n) => (
            <div>{igd[n].name}, </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={stl.categories}>
      <div className={stl.name}>{name}</div>
      <div className={stl.dishes_list}>{dishesList}</div>
    </div>
  );
};
