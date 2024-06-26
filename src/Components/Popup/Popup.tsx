//libraries
import { Button } from 'antd';
//assets
import { veg } from '../../assets/imports';
//style
import stl from './Popup.module.css'; // Подключаем файл стилей

type popup = {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Popup = ({ isOpen, onClose }: popup) => {
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={stl.popup}>
      <div className={stl.popup_content} onClick={handleContentClick}>
        <h2>Список продуктов отправлен в телеграм-бот "Чё купить"</h2>
        <img src={veg} alt="pumpkin" />
        <Button
          // width={'300px'}
          // height={'60px'}
          className={stl.close_button}
          onClick={onClose}
          // text={'Закрыть'}
        >
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default Popup;
