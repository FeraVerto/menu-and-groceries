//libraries
import { observer } from 'mobx-react-lite';
import cogoToast from 'cogo-toast';
import { ReactElement, useCallback, useState } from 'react';
import { Button } from 'antd';
//styles
import stl from './Category.module.css';
//components
// import { Button } from '../../../../Components/Button/Button';
import { Cart } from '../../../Cart/Cart';
import { AddDishModal } from '../AddDishModal/AddDishModal';
//store
import Store from '../../../../store/store';
//types
import { dishType, sectionListType } from '../../../../store/storeTypes';
import { helper } from '../../../../utils/helper';
import { PlusOutlined } from '@ant-design/icons';

type categoriyType = {
  name: string;
  dishes: dishType[];
  menuSection: sectionListType;
};

//временно
//нужен ли здесь обсервер
export const Category = observer(
  ({ name, dishes, menuSection }: categoriyType): ReactElement => {
    const { addIngredientsToCartList } = Store;
    const [isOpen, isOpenSet] = useState(false);

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

          {/* Разобраться с классами кнопок */}
          <div className={stl.dishes_add_button}>
            <Button
              className={stl.dishes_add_button}
              onClick={() => {
                onClickAddButtonHandler(m.ingredients, m.id, m.dishName);
              }}
              block
            >
              Добавить в корзину
            </Button>
          </div>
        </li>
      );
    });

    const showModal = () => {
      isOpenSet(true);
    };

    return (
      <>
        <div className={stl.categories_cart_tablet}>
          <Cart />
        </div>
        <div className={stl.categories}>
          <div className={stl.category_header}>
            <h2 className={stl.category_name}>{name}</h2>
            <Button
              //временно , нагромождение классов
              className={`${stl.dishes_add_button} ${stl.add_new_button}`}
              onClick={showModal}
              type="primary"
              shape="circle"
              icon={
                //@ts-ignore
                <PlusOutlined style={{ fontSize: '40px' }} />
              }
            />
          </div>
          <ul className={stl.category_dishes_list}>{dishesList}</ul>
          <AddDishModal
            isOpen={isOpen}
            setIsModalOpen={isOpenSet}
            menuSection={menuSection}
          />
        </div>
      </>
    );
  }
);
