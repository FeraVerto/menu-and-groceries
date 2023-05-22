import Modal from 'react-modal';
import uuid4 from 'uuid4';
import { Checkbox } from '../../Components/Checkbox';
import { useState } from 'react';
import Store from '../../store/store';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import { convertObjectToArray } from '../../utils/convertObjectToArray';

type BasketModal = {
  isOpen: boolean;
  closeModal: () => void;
};

export const BasketModal = observer(({ isOpen, closeModal }: BasketModal) => {
  let { productsCategorized, ingredients, deleteProductFromList } = Store;
  const [selectedOption, setSelectedOption] = useState(null);

  // const getIngredient = () => {
  //   return;
  // };

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

  const options = convertObjectToArray(ingredients);

  return (
    <Modal isOpen={isOpen} contentLabel="Корзина">
      <Select
        defaultValue={selectedOption}
        //@ts-ignore
        onChange={setSelectedOption}
        options={options}
      />
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
