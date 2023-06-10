//libraries
import Modal from 'react-modal';
import { observer } from 'mobx-react-lite';
import { ReactElement, useState } from 'react';
import cogoToast from 'cogo-toast';
//styles
import stl from './CartModal.module.css';
//components
import { SelectProduct } from '../../SelectProduct/SelectProduct';
import { ProductsList } from '../ProductsList/ProductsList';
import { DishesList } from '../DishesList/DishesList';
import { Button } from '../../../../Components/Button/Button';
import Popup from '../../../../Components/Popup/Popup';
//store
import Store from './../../../../store/store';
//models
import { sendMessage } from './../../../../model/Products.model';

import remove from '../../../../assets/icon/remove_91021.svg';

type CartModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal = observer(
  ({ isOpen, closeModal }: CartModal): ReactElement => {
    let {
      addedProductsList,
      deleteProductFromList,
      addProductsToCartList,
      dishesListNameForSend,
      user,
      clearState,
    } = Store;

    const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

    const addIngredientToList = (
      ing: { value: string; label: string }[] | null
    ): null | void => {
      if (ing === null) {
        return null;
      }
      const ingredientsArrayId = ing.reduce((acc, item) => {
        return [...acc, item.value];
      }, [] as string[]);

      addProductsToCartList(ingredientsArrayId);
    };

    const removeProductFromList = (id: string): void => {
      deleteProductFromList(id);
    };

    const addedProductFromList = (id: string): void => {
      addProductsToCartList([id]);
    };

    const onClickSendButton = async (): Promise<void> => {
      const result = await sendMessage(
        user.botToken,
        user.chatId,
        addedProductsList,
        dishesListNameForSend
      );

      if (result.success) {
        closeModal();
        clearState();
        setPopupOpen(true);
      } else {
        cogoToast.error(
          <div className={stl.ct_toast_product_added}>
            <div>
              <h2> Список не отправлен </h2>
              <p>{result.error?.message}</p>
            </div>
          </div>,
          {
            position: 'bottom-left',
            hideAfter: 5,
          }
        );
      }
    };

    const onClickClearButton = (): void => {
      clearState();
    };

    const onClickCloseButton = (
      e: React.MouseEvent<HTMLButtonElement>
    ): void => {
      e.stopPropagation();
      closeModal();
    };

    const handleClosePopup = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setPopupOpen(false);
    };

    return (
      <div>
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
            <DishesList />
          </div>
          <div className={stl.modal_bottom_buttons_block}>
            <Button
              disabled={Object.keys(addedProductsList).length === 0}
              width={'300px'}
              height={'60px'}
              text={'Отправить'}
              onClick={onClickSendButton}
            />

            <Button
              width={'300px'}
              height={'60px'}
              text={'Очистить'}
              onClick={onClickClearButton}
            />
          </div>
        </Modal>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
    );
  }
);
