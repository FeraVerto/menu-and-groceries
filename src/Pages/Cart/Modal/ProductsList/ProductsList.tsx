//libraries
import uuid4 from 'uuid4';
import { observer } from 'mobx-react-lite';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//styles
import stl from './ProductsList.module.css';
//store
import Store from '../../../../store/store';

type productsListType = {
  removeProductFromList: (id: string) => void;
  addedProductFromList: (id: string) => void;
};

export const ProductsList = observer(
  ({ removeProductFromList, addedProductFromList }: productsListType) => {
    const { addedProductsList, deletedProductsList } = Store;
    const renderProducts = (
      filteredProducts: 'add' | 'delete',
      list: { [key: string]: { name: string; id: string }[] },
      checked: boolean
    ) => {
      return Object.keys(list)?.map((item) => (
        <li key={uuid4()}>
          {filteredProducts === 'add' && (
            <p className={stl.category_name}>{item}</p>
          )}
          <ul className={stl.products_list}>
            {list[item]?.map((n) => (
              <li className={stl.products_item} key={uuid4()}>
                <Checkbox
                  checked={checked}
                  label={n.name}
                  category={item}
                  productFromList={
                    checked ? removeProductFromList : addedProductFromList
                  }
                  id={n.id}
                />
              </li>
            ))}
          </ul>
        </li>
      ));
    };

    const productsList = renderProducts('add', addedProductsList, true);
    const deletedProducts = renderProducts(
      'delete',
      deletedProductsList,
      false
    );
    return (
      <div className={stl.category_lists_block}>
        <h2>Добавленные продукты</h2>
        <p>Нажмите на продукт, чтобы убрать его из списка</p>
        <ul className={stl.category_list}>{productsList}</ul>
        {Object.keys(deletedProductsList).length !== 0 && (
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
