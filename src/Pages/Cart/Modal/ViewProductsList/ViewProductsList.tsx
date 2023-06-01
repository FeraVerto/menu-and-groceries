//libraries
import { observer } from 'mobx-react-lite';
//styles
import stl from './ViewProductsList.module.css';
//store
import Store from '../../../../store/store';
//utils
import { getFormattedList } from '../../../../utils/getFormattedList';

export const ViewProductsList = observer(() => {
  const { productsCategorized } = Store;
  const text = getFormattedList(productsCategorized);
  return <div className={stl.view_product_list}>Предпросмотр{text}</div>;
});
