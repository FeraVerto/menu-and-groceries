//libraries
import Modal from 'react-modal';
import { observer } from 'mobx-react-lite';
//styles
import stl from './CartModal.module.css';
//components
import { SelectProduct } from '../../SelectProduct/SelectProduct';
import { ProductsList } from '../ProductsList/ProductsList';
import { ViewDishesList } from '../ViewProductsList/ViewDishesList';
import { Button } from '../../../../Components/Button/Button';
//store
import Store from './../../../../store/store';
//models
import { sendMessage } from './../../../../model/Products.model';

import remove from '../../../../assets/icon/remove_91021.svg';

type CartModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal = observer(({ isOpen, closeModal }: CartModal) => {
  let {
    addedProductsList,
    deleteProductFromList,
    addProductsToCartList,
    dishesListForSend,
    user,
  } = Store;

  const addIngredientToList = (
    ing: { value: string; label: string }[] | null
  ) => {
    if (ing === null) {
      return null;
    }
    const ingredientsArrayId = ing.reduce((acc, item) => {
      return [...acc, item.value];
    }, [] as string[]);

    addProductsToCartList(ingredientsArrayId);
  };

  const removeProductFromList = (id: string) => {
    deleteProductFromList(id);
  };

  const addedProductFromList = (id: string) => {
    addProductsToCartList([id]);
  };

  const onClickSendButton = () => {
    sendMessage(
      user.botToken,
      user.chatId,
      addedProductsList,
      dishesListForSend
    );
  };

  const onClickCloseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <Modal
      style={{
        content: {
          width: '1000px',
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
        <Button
          type="close"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            onClickCloseButton(e)
          }
          img={remove}
        />
      </div>

      <SelectProduct addIngredientToList={addIngredientToList} />

      <div className={stl.modal_visual_list_block}>
        <ProductsList
          removeProductFromList={removeProductFromList}
          addedProductFromList={addedProductFromList}
        />
        <ViewDishesList />
      </div>

      <Button
        width={'300px'}
        height={'60px'}
        text={'send'}
        onClick={onClickSendButton}
      />
    </Modal>
  );
});
