import cart from '../../assets/icon/shoppingcart_80945.svg';
//libraries
import { ChangeEvent, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
//store
import Store from '../../stores/store';
//components
import { CartModal } from './Modal/CartModal/CartModal';
//styles
import stl from './Cart.module.css';
import { helper } from '../../utils/helper';

Modal.setAppElement('#root');

export const Cart = observer(() => {
  const { addedIngredientsId } = Store.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  // const onPressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     openModal();
  //   }
  // };

  return (
    <div
      onClick={openModal}
      tabIndex={1}
      className={stl.cart}
      // onKeyDown={onPressEnter}
    >
      {/* @ts-ignore */}
      <ShoppingCartOutlined className={stl.cart_img} />
      {/* <img className={stl.cart_img} src={cart} alt="cart" width="60px" /> */}
      <div className={stl.cart_counter}>{addedIngredientsId.length}</div>
      <CartModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
});
