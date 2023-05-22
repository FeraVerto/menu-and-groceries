import Modal from 'react-modal';
import uuid4 from 'uuid4';
import { Checkbox } from '../../Components/Checkbox';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';

import { SelectProduct } from '../SelectProduct/SelectProduct';

type BasketModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const BasketModal = observer(({ isOpen, closeModal }: BasketModal) => {
  let { productsCategorized, deleteProductFromList, addToCart } = Store;

  const addIngredientToList = (
    ing: { value: string; label: string }[] | null
  ) => {
    if (ing === null) {
      return null;
    }
    const ingredientsArrayId = ing?.reduce((acc, item) => {
      return [...acc, item.value];
    }, [] as string[]);

    addToCart(ingredientsArrayId);
  };

  const removeProductFromList = (id: string, category: string) => {
    deleteProductFromList(id, category);
  };

  const productsList = Object.keys(productsCategorized).map((item) => {
    return (
      <li key={uuid4()}>
        {item}
        <ul>
          {productsCategorized[item].map((n) => {
            return (
              <li key={uuid4()}>
                <Checkbox
                  category={item}
                  removeProductFromList={removeProductFromList}
                  id={n.id}
                />
                {n.name}
              </li>
            );
          })}
        </ul>
      </li>
    );
  });

  return (
    <Modal isOpen={isOpen} contentLabel="Корзина">
      <SelectProduct addIngredientToList={addIngredientToList} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
      >
        Close
      </button>
      <ul>{productsList}</ul>
    </Modal>
  );
});
