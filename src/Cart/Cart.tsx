import stl from './Cart.module.css';
import { useState } from 'react';
import Store from '../store/store';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { CartModal } from './Modal/CartModal/CartModal';
import cart from '../images/shoppingcart_80945.svg';
Modal.setAppElement('#root');

export const Cart = observer(() => {
  const { cartContents } = Store;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={stl.cart} onClick={openModal}>
      <img className={stl.cart_img} src={cart} alt="cart" width="60px" />
      {cartContents.length}
      <CartModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
});
