//libraries
import { observer } from 'mobx-react-lite';
//styles
import stl from './DishesList.module.css';
//components
import { Checkbox } from '../../../../Components/Checkbox';
//store
import Store from '../../../../store/store';

export const DishesList = observer(() => {
  const { dishesListNameForSend } = Store;

  const dishesListForPreview = dishesListNameForSend.map((item) => {
    console.log('item', item);
    return (
      <div>
        {/* <Checkbox id={item} /> */}
        {item}
      </div>
    );
  });
  return (
    <div className={stl.dishes_list}>
      <h2>Заказанные блюда</h2>
      <p>
        Нажмите на блюдо, чтобы убрать его и все его ингредиенты из списка (в
        разработке)
      </p>
      {dishesListForPreview}
    </div>
  );
});
