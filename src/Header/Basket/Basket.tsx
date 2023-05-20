import stl from './Basket.module.css';
import { useState } from 'react';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import { BasketModal } from '../Modal/BasketModal';
Modal.setAppElement('#root');

export const Basket = observer(() => {
  const { cartContents, productsCategorized } = Store;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={stl.basket} onClick={openModal}>
      Корзина {cartContents.length}
      <BasketModal
        productsCategorized={productsCategorized}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        cartContents={cartContents}
      />
    </div>
  );
});
