import Modal from 'react-modal';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';
import { SelectProduct } from '../SelectProduct/SelectProduct';
import { sendMessage } from '../../api/api';
import { ProductsList } from './ProductsList/ProductsList';

type BasketModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const BasketModal = observer(({ isOpen, closeModal }: BasketModal) => {
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

  return (
    <Modal isOpen={isOpen} contentLabel="Корзина">
      <h1>Список продуктов</h1>
      <SelectProduct addIngredientToList={addIngredientToList} />
      <ProductsList
        productsCategorized={productsCategorized}
        removeProductFromList={removeProductFromList}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
      >
        Close Window
      </button>
      <button onClick={onClickSendButton}>Send</button>
    </Modal>
  );
});
