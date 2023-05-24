import uuid4 from 'uuid4';
import { Checkbox } from '../../../Components/Checkbox';

type productsListType = {
  productsCategorized: { [key: string]: { name: string; id: string }[] };
  removeProductFromList: (id: string, category: string) => void;
};

export const ProductsList = ({
  productsCategorized,
  removeProductFromList,
}: productsListType) => {
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
  return <ul>{productsList}</ul>;
};
