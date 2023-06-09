//libraries
import { observer } from 'mobx-react-lite';
import { ReactElement } from 'react';
//styles
import stl from './DishesList.module.css';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//store
import Store from '../../../../store/store';

export const DishesList = observer((): ReactElement => {
  const { dishesListNameForSend, deleteDishesFromList } = Store;

  const removeDishedFromList = (id: string): void => {
    deleteDishesFromList(id);
  };

  const dishesListForPreview: ReactElement[] = dishesListNameForSend.map(
    (item) => {
      return (
        <li className={stl.dishes_item} key={item.id}>
          <Checkbox
            checked={true}
            id={item.id}
            label={item.dishName}
            productFromList={() => removeDishedFromList(item.id)}
          />
        </li>
      );
    }
  );
  return (
    <div className={stl.dishes_modal_block}>
      <h2>Заказанные блюда</h2>
      <p>
        Нажмите на блюдо, чтобы убрать его и все его ингредиенты из списка (в
        разработке)
      </p>
      <ul className={stl.dishes_list}>{dishesListForPreview}</ul>
    </div>
  );
});
