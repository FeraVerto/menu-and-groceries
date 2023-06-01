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
    const { productsCategorized, deletedProductsList } = Store;
    const renderProducts = (
      list: { [key: string]: { name: string; id: string }[] },
      checked: boolean
    ) => {
      return Object.keys(list)?.map((item) => (
        <li key={uuid4()}>
          {item}
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

    const productsList = renderProducts(productsCategorized, true);
    const deletedProducts = renderProducts(deletedProductsList, false);
    return (
      <div className={stl.category_lists_block}>
        <ul className={stl.category_list}>{productsList}</ul>;
        <ul className={stl.category_list}>{deletedProducts}</ul>;
      </div>
    );
  }
);
