//libraries
import { observer } from 'mobx-react-lite';
import { ReactElement, useCallback } from 'react';
//styles
import stl from './DishesList.module.css';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//store
import Store from '../../../../store/store';
import { helper } from '../../../../utils/helper';

export const DishesList = observer((): ReactElement => {
  const { deleteIngredients, dishesSearchForId, dishesWithIngredients } = Store;

  const removeDishedFromList = useCallback(
    (arrayId: string): void => {
      const ingredientsArray = dishesWithIngredients[arrayId];
      deleteIngredients(ingredientsArray, 'dish', arrayId);
    },
    [dishesWithIngredients, deleteIngredients]
  );

  const dishesListForPreview: ReactElement[] = Object.entries(
    dishesSearchForId
  ).map((item) => {
    return (
      <li className={stl.dishes_item} key={item[0]}>
        <Checkbox
          checked={true}
          id={item[0]}
          label={item[1]}
          productFromList={() => removeDishedFromList(item[0])}
        />
      </li>
    );
  });
  return (
    <div className={stl.dishes_modal_block}>
      <h2>Заказанные блюда</h2>
      <p>Нажмите на блюдо, чтобы убрать его и все его ингредиенты из списка</p>
      <ul className={stl.dishes_list}>{dishesListForPreview}</ul>
    </div>
  );
});
