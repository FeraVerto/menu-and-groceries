//libraries
import { observer } from 'mobx-react-lite';
import { ReactElement, useCallback, useState } from 'react';
import cogoToast from 'cogo-toast';
import { Modal } from 'antd';
//styles
import stl from './CartModal.module.css';
//components
import { SelectProduct } from '../../SelectProduct/SelectProduct';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { DishesList } from '../DishesList/DishesList';
import Popup from '../../../../Components/Popup/Popup';
//store
import Store from './../../../../store/store';
//models
import { sendMessage } from './../../../../model/Products.model';
import { helper } from '../../../../utils/helper';

type CartModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const CartModal = observer(
  ({ isOpen, closeModal }: CartModal): ReactElement => {
    let {
      _ingredients,
      addedIngredientsId,
      addIngredientsToCartList,
      dishesSearchForId,
      deleteIngredients,
      addIngredientFromSelection,
      shoppingList,
      user,
      clearState,
    } = Store;

    const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

    //временное дублирование
    const addIngredientToList = useCallback(
      (ing: { value: string; label: string }[] | null): null | void => {
        if (ing === null) {
          return null;
        }
        const ingredientsArrayId = ing.reduce((acc, item) => {
          return [...acc, item.value];
        }, [] as string[]);

        addIngredientFromSelection(ingredientsArrayId);
      },
      [addIngredientFromSelection]
    );

    const removeProductFromList = useCallback(
      (id: string): void => {
        deleteIngredients([id]);
      },
      [deleteIngredients]
    );

    const addedProductFromList = useCallback(
      (id: string): void => {
        const item = _ingredients[id];
        addIngredientsToCartList([
          { name: item.name, category: item.category, id },
        ]);
      },
      [_ingredients, addIngredientsToCartList]
    );

    const onClickSendButton = useCallback(async (): Promise<void> => {
      const arrayDishesName = Object.values(dishesSearchForId);
      user.chatId.forEach(async (item) => {
        const result = await sendMessage(
          user.botToken,
          item,
          shoppingList,
          arrayDishesName
        );

        if (result.success) {
          closeModal();
          clearState();
          setPopupOpen(true);
        } else {
          cogoToast.error(
            <div className={stl.ct_toast_error}>
              <h3> Список не отправлен </h3>
              <p>{result.error?.message}</p>
            </div>,
            {
              position: 'bottom-left',
              hideAfter: 5,
            }
          );
        }
      });
    }, [clearState, closeModal, shoppingList, dishesSearchForId, user]);

    const onClickClearButton = useCallback((): void => {
      clearState();
    }, [clearState]);

    const onClickCloseButton = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        closeModal();
      },
      [closeModal]
    );

    const handleClosePopup = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setPopupOpen(false);
      },
      [setPopupOpen]
    );

    return (
      <div className={stl.modal}>
        <Modal className={stl.modal_content} open={true} width="1000px">
          <h1>Список продуктов</h1>
          {/* <div className={stl.modal_header_block}>
            <Button
              tabIndex={0}
              // type="close"
              // onKeyDownFn={closeModal}
              onClick={onClickCloseButton}
              // img={remove}
            />
          </div> */}
          <SelectProduct addIngredientToList={addIngredientToList} />
          <div className={stl.modal_visual_list_block}>
            <ShoppingList
              removeProductFromList={removeProductFromList}
              addedProductFromList={addedProductFromList}
            />
            <DishesList />
          </div>
          {/* <div className={stl.modal_bottom_buttons_block}>
            <Button
              disabled={Object.keys(addedIngredientsId).length === 0}
              // width={'300px'}
              // height={'60px'}
              // text={'Отправить'}
              onClick={onClickSendButton}
            />

            <Button
              // width={'300px'}
              // height={'60px'}
              // text={'Очистить'}
              onClick={onClickClearButton}
            />
          </div> */}
        </Modal>
        {/* <ReactModal
          className={stl.modal_content}
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Корзина"
        >
          <div className={stl.modal_header_block}>
            <h1>Список продуктов</h1>
            <Button
              tabIndex={0}
              type="close"
              onKeyDownFn={closeModal}
              onClick={onClickCloseButton}
              img={remove}
            />
          </div>

          <SelectProduct addIngredientToList={addIngredientToList} />

          <div className={stl.modal_visual_list_block}>
            <ShoppingList
              removeProductFromList={removeProductFromList}
              addedProductFromList={addedProductFromList}
            />
            <DishesList />
          </div>
          <div className={stl.modal_bottom_buttons_block}>
            <Button
              disabled={Object.keys(addedIngredientsId).length === 0}
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
        </ReactModal> */}
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </div>
    );
  }
);
