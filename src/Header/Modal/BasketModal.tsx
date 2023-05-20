import Modal from 'react-modal';

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
            <li>
              {item}{' '}
              {productsCategorized[item].map((n) => {
                return <li>{n}</li>;
              })}
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};
