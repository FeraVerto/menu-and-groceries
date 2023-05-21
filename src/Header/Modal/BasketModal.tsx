import Modal from 'react-modal';
import uuid4 from 'uuid4';
import { Checkbox } from '../../Components/Checkbox';
import { useState } from 'react';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';

type BasketModal = {
  isOpen: boolean;
  closeModal: () => void;
  cartContents: string[];
  productsCategorized: { [key: string]: { name: string; id: string }[] };
  deleteProductFromList: (id: string, category: string) => void;
};

export const BasketModal = observer(
  ({
    isOpen,
    closeModal,
    cartContents,
    productsCategorized,
    deleteProductFromList,
  }: BasketModal) => {
    //let { productsCategorized } = Store;
    const [productsChecked, setProductsChecked] =
      useState<string[]>(cartContents);

    const checkedProduct = (id: string, category: string) => {
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
                    checkedProduct={checkedProduct}
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
  }
);
