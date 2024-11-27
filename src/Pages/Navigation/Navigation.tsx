//libraries
import { ReactElement, useRef, useState } from 'react';
import MoreOutlined from '@ant-design/icons/lib/icons/MoreOutlined';
//styles
import stl from './Navigation.module.css';
//components
import { AddCategory } from './AddCategoryForm/AddCategory';
import { MenuList, MenuListRef } from './MenuList/MenuList';
//store
import Store from '../../store/store';
import { helper } from '../../utils/helper';
import { DropDownMenu } from '../../Components/DropDownMenu/DropDownMenu';

export const Navigation = (): ReactElement => {
  const { sectionMenuList, loadMenuSectionList, user } = Store;
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuListRef = useRef<MenuListRef>(null);

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
      <MenuList
        ref={menuListRef}
        sectionMenuList={sectionMenuList}
        loadMenuSectionList={loadMenuSectionList}
      />
      <AddCategory />
    </nav>
  );
};
