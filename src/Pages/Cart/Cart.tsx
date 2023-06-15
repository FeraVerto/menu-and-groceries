import cart from '../../assets/icon/shoppingcart_80945.svg';
//libraries
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
//store
import Store from '../../store/store';
//components
import { CartModal } from './Modal/CartModal/CartModal';
//styles
import stl from './Cart.module.css';
import { helper } from '../../utils/helper';

Modal.setAppElement('#root');

export const Cart = observer(() => {
  const { addedIngredientsId: addedIngredientsId } = Store;
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
      {addedIngredientsId.length}
      <CartModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
});
