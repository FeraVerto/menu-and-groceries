//libraries
import { observer } from 'mobx-react-lite';
import { ReactElement, useCallback, useState } from 'react';
import cogoToast from 'cogo-toast';
import { Button, Modal } from 'antd';
//styles
import stl from './CartModal.module.css';
import stl_button from '../../../../buttonStyles.module.css';
//components
import { SelectIngredient } from '../../SelectIngredient/SelectIngredient';
import { ShoppingList } from '../ShoppingList/ShoppingList';
import { DishesList } from '../DishesList/DishesList';
import Popup from '../../../../Components/Popup/Popup';
//store
import Store from './../../../../store/store';
//models
import { sendMessage } from './../../../../model/Products.model';
import { helper } from '../../../../utils/helper';

type CartModal = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export const CartModal = ({
  isModalOpen,
  setIsModalOpen,
}: CartModal): ReactElement => {
  let {
    _ingredients,
    addedIngredientsId,
    addIngredientsToCartList,
    dishesSearchForId,
    deleteIngredients,
    shoppingList,
    user,
    clearState,
  } = Store;

  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

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

  // const onClickSendButton = useCallback(async (): Promise<void> => {
  //   const arrayDishesName = Object.values(dishesSearchForId);
  //   user.chatId.forEach(async (item) => {
  //     const result = await sendMessage(
  //       user.botToken,
  //       item,
  //       shoppingList,
  //       arrayDishesName
  //     );

  //     if (result.success) {
  //       closeModal();
  //       clearState();
  //       setPopupOpen(true);
  //     } else {
  //       cogoToast.error(
  //         <div className={stl.ct_toast_error}>
  //           <h3> Список не отправлен </h3>
  //           <p>{result.error?.message}</p>
  //         </div>,
  //         {
  //           position: 'bottom-left',
  //           hideAfter: 5,
  //         }
  //       );
  //     }
  //   });
  // }, [clearState, closeModal, shoppingList, dishesSearchForId, user]);

  const handleClosePopup = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setPopupOpen(false);
    },
    [setPopupOpen]
  );

  const onClickCloseButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setIsModalOpen(false);
    },
    [setIsModalOpen]
  );

  return (
    <div className={stl.modal}>
      <Modal
        className={stl.modal_content}
        open={isModalOpen}
        width="1000px"
        footer={null}
        onCancel={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClickCloseButton(e)
        }
      >
        <h1>Список продуктов</h1>
        {/* <SelectIngredient addIngredientToList={addIngredientToList} /> */}
        <SelectIngredient />
        <div className={stl.modal_visual_list_block}>
          <ShoppingList
            removeProductFromList={removeProductFromList}
            addedProductFromList={addedProductFromList}
          />
          <DishesList />
        </div>
        <Button className={`${stl_button.button_green} ${stl.button_size}`}>
          Отправить
        </Button>
      </Modal>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};
