import Modal from 'react-modal';
import Store from '../../../store/store';
import { observer } from 'mobx-react-lite';
import { SelectProduct } from '../../SelectProduct/SelectProduct';
import { sendMessage } from '../../../model/Products.model';
import { ProductsList } from '../ProductsList/ProductsList';
import stl from './CartModal.module.css';
import remove from './../../../images/remove_91021.svg';
import { ViewProductsList } from '../ViewProductsList/ViewProductsList';

type CartModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal = observer(({ isOpen, closeModal }: CartModal) => {
  let { productsCategorized, deleteProductFromList, addToCart, user } = Store;

  const addIngredientToList = (
    ing: { value: string; label: string }[] | null
  ) => {
    if (ing === null) {
      return null;
    }
    const ingredientsArrayId = ing.reduce((acc, item) => {
      return [...acc, item.value];
    }, [] as string[]);

    addToCart(ingredientsArrayId);
  };

  const removeProductFromList = (id: string, category: string) => {
    deleteProductFromList(id, category);
  };

  const onClickSendButton = () => {
    sendMessage(user.botToken, user.chatId, productsCategorized);
  };

  const onClickCloseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Modal
      style={{
        content: {
          minWidth: '1000px',
          height: '800px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      isOpen={isOpen}
      contentLabel="Корзина"
    >
      <div className={stl.modal_header_block}>
        <h1>Список продуктов</h1>
        <button
          className={stl.modal_button_close}
          onClick={(e) => onClickCloseButton(e)}
        >
          <img src={remove} width="50px" height="50px" alt="close" />
        </button>
      </div>

      <SelectProduct addIngredientToList={addIngredientToList} />

      <div className={stl.modal_visual_list_block}>
        <ProductsList removeProductFromList={removeProductFromList} />
        <ViewProductsList />
      </div>

      <button
        className={`${stl.modal_button} ${stl.modal_button_send}`}
        onClick={onClickSendButton}
      >
        Send
      </button>
    </Modal>
  );
});
