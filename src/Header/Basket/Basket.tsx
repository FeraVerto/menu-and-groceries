import stl from './Basket.module.css';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';

export const Basket = observer(() => {
  const { cartContents } = Store;
  return <div className={stl.basket}>Basket {cartContents.length}</div>;
});
