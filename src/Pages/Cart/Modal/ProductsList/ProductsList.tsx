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
};

export const ProductsList = observer(
  ({ removeProductFromList }: productsListType) => {
    const { productsCategorized } = Store;
    const productsList = Object.keys(productsCategorized).map((item) => {
      return (
        <li key={uuid4()}>
          {item}
          <ul>
            {productsCategorized[item].map((n) => {
              return (
                <li key={uuid4()}>
                  <Checkbox
                    category={item}
                    removeProductFromList={removeProductFromList}
                    id={n.id}
                  />
                  {n.name}
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
    return <ul className={stl.products_list}>{productsList}</ul>;
  }
);
