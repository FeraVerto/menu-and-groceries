import stl from './DropDownMenu.module.css';
//store
import Store from '../../stores/store';

export const DropDownMenu = () => {
  const onClickLogout = () => {
    Store.userStore.setLogout();
  };

  return (
    <div className={stl.drop_down_menu}>
      <div>Настройки</div>
      {/* сделать здесь разделитель вместо br */}
      <br />
      <div onClick={onClickLogout}>Выйти</div>
    </div>
  );
};
