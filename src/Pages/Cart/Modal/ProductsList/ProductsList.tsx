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
  removeProductFromList: (id: string, category: string) => void;
  addedProductFromList: (id: string, category: string) => void;
};

export const ProductsList = observer(
  ({ removeProductFromList, addedProductFromList }: productsListType) => {
    const { productsCategorized, deletedProductsList } = Store;
    const deletedProducts = Object.keys(deletedProductsList)?.map((item) => {
      return (
        <li key={uuid4()}>
          {item}
          <ul className={stl.products_list}>
            {deletedProductsList[item]?.map((n) => {
              return (
                <li className={stl.products_item} key={uuid4()}>
                  <Checkbox
                    checked={false}
                    label={n.name}
                    category={item}
                    addedProductFromList={addedProductFromList}
                    id={n.id}
                  />
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
    const productsList = Object.keys(productsCategorized)?.map((item) => {
      return (
        <li key={uuid4()}>
          {item}
          <ul className={stl.products_list}>
            {productsCategorized[item]?.map((n) => {
              return (
                <li className={stl.products_item} key={uuid4()}>
                  <Checkbox
                    checked={true}
                    label={n.name}
                    category={item}
                    removeProductFromList={removeProductFromList}
                    id={n.id}
                  />
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
    return (
      <div className={stl.category_lists_block}>
        <ul className={stl.category_list}>{productsList}</ul>;
        <ul className={stl.category_list}>{deletedProducts}</ul>;
      </div>
    );
  }
);
