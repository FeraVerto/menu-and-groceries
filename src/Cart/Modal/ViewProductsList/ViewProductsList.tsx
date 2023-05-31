import { observer } from 'mobx-react-lite';
import { getFormattedList } from '../../../utils/getFormattedList';
import stl from './ViewProductsList.module.css';
import Store from '../../../store/store';

export const ViewProductsList = observer(() => {
  const { productsCategorized } = Store;
  const text = getFormattedList(productsCategorized);
  return <div className={stl.view_product_list}>Предпросмотр{text}</div>;
});
