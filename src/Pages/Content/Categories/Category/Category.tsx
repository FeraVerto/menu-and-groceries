//libraries
import { observer } from 'mobx-react-lite';
import cogoToast from 'cogo-toast';
import { ReactElement, useCallback } from 'react';
//styles
import stl from './Category.module.css';
//components
import { Button } from '../../../../Components/Button/Button';
import { Cart } from '../../../Cart/Cart';
//store
import Store from '../../../../store/store';
//types
import { dishType } from '../../../../store/storeTypes';
import { helper } from '../../../../utils/helper';

type categoriyType = {
  name: string;
  dishes: dishType[];
};

export const Category = observer(
  ({ name, dishes }: categoriyType): ReactElement => {
    const { addIngredientsToCartList } = Store;

    const notification = (dishName: string) =>
      cogoToast.success(
        <div className={stl.ct_toast_product_added}>
          <h3>Успех!</h3>
          <div>Блюдо "{dishName}" добавлено в корзину</div>
        </div>,
        {
          position: 'bottom-left',
          hideAfter: 5,
        }
      );

    const onClickAddButtonHandler = useCallback(
      (
        ingredients: { name: string; category: string; id: string }[],
        id: string,
        dishName: string
      ): void => {
        addIngredientsToCartList(ingredients, dishName, id);

        notification(dishName);
      },
      [addIngredientsToCartList]
    );

    let dishesList = dishes.map((m) => {
      return (
        <li className={stl.dishes_item} key={m.id}>
          <div>
            <div className={stl.image_wrapper}>
              <img src={m.image} alt="add to cart button" />
            </div>
            <div className={stl.dishes_info}>
              <h3 className={stl.dishes_info_name}>{m.dishName}</h3>
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="ссылка на рецепт борща"
                >
                  Открыть рецепт
                </a>
              )}
              <div className={stl.ingredients}>
                {m.ingredients.map((n, i) => (
                  <div key={n.id}>
                    {n.name}
                    {i !== Object.keys(m.ingredients).length - 1 && ','}&nbsp;
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={stl.dishes_add_button}>
            <Button
              width={'100%'}
              height={'60px'}
              text={'Добавить в корзину'}
              onClick={() => {
                onClickAddButtonHandler(m.ingredients, m.id, m.dishName);
              }}
            />
          </div>
        </li>
      );
    });

    return (
      <>
        <div className={stl.categories_cart_tablet}>
          <Cart />
        </div>
        <div className={stl.categories}>
          <h2 className={stl.category_name}>{name}</h2>
          <ul className={stl.category_dishes_list}>{dishesList}</ul>
        </div>
      </>
    );
  }
);
