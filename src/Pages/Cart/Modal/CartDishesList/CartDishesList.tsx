//libraries
import { observer } from 'mobx-react-lite';
import { ReactElement, useCallback } from 'react';
//styles
import stl from './CartDishesList.module.css';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//store
import Store from '../../../../stores/store';
import { helper } from '../../../../utils/helper';

export const CartDishesList = observer((): ReactElement => {
  const { dishes } = Store.data;

  const removeDishedFromList = useCallback((dishID: string): void => {
    // deleteIngredients([], 'dish', dishID);
  }, []);

  const dishesListForPreview: ReactElement[] = Object.entries(dishes).map(
    (item) => {
      return (
        <li className={stl.dishes_item} key={item[0]}>
          <Checkbox
            checked={true}
            id={item[0]}
            label={item[1].dishName}
            productFromList={() => removeDishedFromList(item[0])}
          />
        </li>
      );
    }
  );
  return (
    <div className={stl.dishes_modal_block}>
      <h2>Заказанные блюда</h2>
      <p>Нажмите на блюдо, чтобы убрать его и все его ингредиенты из списка</p>
      <ul className={stl.dishes_list}>{dishesListForPreview}</ul>
    </div>
  );
});
