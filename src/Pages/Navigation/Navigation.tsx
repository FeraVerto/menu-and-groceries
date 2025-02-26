//libraries
import { ReactElement, useState } from 'react';
import MoreOutlined from '@ant-design/icons/lib/icons/MoreOutlined';
//styles
import stl from './Navigation.module.css';
//components
import { AddCategory } from './AddCategoryForm/AddCategory';
import { MenuList } from './MenuList/MenuList';
import { DropDownMenu } from '../../Components/DropDownMenu/DropDownMenu';
//store
import Store from '../../stores/store';
import { helper } from '../../utils/helper';
import { observer } from 'mobx-react-lite';

export const Navigation = observer((): ReactElement => {
  const { menu, loadMenuSectionList } = Store.menuStore;
  const { user } = Store.userStore;
  const [toggleMenu, setToggleMenu] = useState(false);

  const onMoreOutlinedClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className={stl.categories_nav}>
      <div className={stl.usernameBlock}>
        <p>{user.username}</p>
        <MoreOutlined onClick={onMoreOutlinedClick} />
      </div>
      {toggleMenu ? <DropDownMenu /> : false}
      <h1>Меню</h1>
      <MenuList menu={menu} loadMenuSectionList={loadMenuSectionList} />
      <AddCategory />
    </nav>
  );
});
