//libraries
import { observer } from 'mobx-react-lite';
//styles
import stl from './ViewDishesList.module.css';
//store
import Store from '../../../../store/store';

export const ViewDishesList = observer(() => {
  const { dishesListForSend } = Store;

  const dishesListForPreview = dishesListForSend.map((item) => {
    return <div>{item}</div>;
  });
  return (
    <div className={stl.view_product_list}>
      Предпросмотр
      {dishesListForPreview}
    </div>
  );
});
