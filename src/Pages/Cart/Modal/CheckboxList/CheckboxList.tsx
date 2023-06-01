//libraries
import { observer } from 'mobx-react-lite';
import uuid4 from 'uuid4';
//styles
import stl from './CheckboxList.module.css';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//store
import Store from '../../../../store/store';

type checkboxListType = {
  data: { [key: string]: { name: string; id: string }[] };
  checked: boolean;
  addedProductFromList: () => {};
  removeProductFromList: () => {};
};

export const CheckboxList = observer(
  ({
    data,
    checked,
    addedProductFromList,
    removeProductFromList,
  }: checkboxListType) => {
    const products = Object.keys(data)?.map((item) => {
      return (
        <li key={uuid4()}>
          {item}
          <ul className={stl.products_list}>
            {data[item]?.map((n) => {
              return (
                <li className={stl.products_item} key={uuid4()}>
                  <Checkbox
                    checked={false}
                    label={n.name}
                    category={item}
                    productFromList={
                      checked ? addedProductFromList : removeProductFromList
                    }
                    id={n.id}
                  />
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
    return <ul className={stl.category_list}>{products}</ul>;
  }
);
