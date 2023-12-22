//libraries
import uuid4 from 'uuid4';
import { observer } from 'mobx-react-lite';
import { ReactElement, useCallback } from 'react';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//styles
import stl from './ProductsList.module.css';
//store
import Store from '../../../../store/store';
import { helper } from '../../../../utils/helper';

type productsListType = {
  removeProductFromList: (id: string) => void;
  addedProductFromList: (id: string) => void;
};

export const ProductsList = observer(
  ({
    removeProductFromList,
    addedProductFromList,
  }: productsListType): ReactElement => {
    const { shoppingList, dataToShowDeletedIngredients } = Store;

    const renderProducts = useCallback(
      (
        list: { [key: string]: { name: string; id: string }[] },
        checked: boolean
      ): ReactElement[] => {
        return Object.keys(list)?.map((item) => (
          <li key={uuid4()}>
            <p className={stl.category_name}>{item}</p>
            <ul className={stl.products_list}>
              {list[item]?.map((n) => (
                <li className={stl.products_item} key={uuid4()}>
                  <Checkbox
                    checked={checked}
                    label={n.name}
                    productFromList={removeProductFromList}
                    id={n.id}
                  />
                </li>
              ))}
            </ul>
          </li>
        ));
      },
      [removeProductFromList]
    );

    const renderDeletedProducts = useCallback(
      (
        list: { name: string; id: string }[],
        checked: boolean
      ): ReactElement[] => {
        return list?.map((item) => (
          <li key={uuid4()}>
            <ul className={stl.products_list}>
              <li className={stl.products_item} key={uuid4()}>
                <Checkbox
                  checked={checked}
                  label={item.name}
                  productFromList={addedProductFromList}
                  id={item.id}
                />
              </li>
            </ul>
          </li>
        ));
      },
      [addedProductFromList]
    );

    const productsList = renderProducts(shoppingList, true);
    const deletedProducts = renderDeletedProducts(
      dataToShowDeletedIngredients,
      false
    );
    return (
      <div className={stl.category_lists_block}>
        <h2>Добавленные продукты</h2>
        <p>Нажмите на продукт, чтобы убрать его из списка</p>
        <ul className={stl.category_list}>{productsList}</ul>
        {Object.keys(dataToShowDeletedIngredients).length !== 0 && (
          <div className={stl.deleted_products_block}>
            <hr />
            <h2>Удалённые продукты</h2>
            <p>Нажмите на продукт, чтобы вернуть его в корзину</p>
            <ul className={stl.category_list}>{deletedProducts}</ul>
          </div>
        )}
      </div>
    );
  }
);
