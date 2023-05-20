import Modal from 'react-modal';
import uuid from 'react-uuid';

type BasketModal = {
  isOpen: boolean;
  closeModal: () => void;
  cartContents: string[];
  productsCategorized: { [key: string]: string[] };
};

export const BasketModal = ({
  isOpen,
  closeModal,
  cartContents,
  productsCategorized,
}: BasketModal) => {
  return (
    <Modal isOpen={isOpen} contentLabel="Корзина">
      <button
        onClick={(e) => {
          closeModal();
          e.stopPropagation();
        }}
      >
        Close
      </button>
      <ul>
        {Object.keys(productsCategorized).map((item) => {
          return (
            <li key={uuid()}>
              {item}{' '}
              <ul>
                {productsCategorized[item].map((n) => {
                  return <li key={uuid()}>{n}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};
