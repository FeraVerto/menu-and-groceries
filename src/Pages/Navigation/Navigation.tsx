//libraries
import { ReactElement, useRef } from 'react';
//styles
import stl from './Navigation.module.css';
//components
import { AddCategory } from './AddCategory/AddCategory';
import { MenuList, MenuListRef } from './MenuList/MenuList';
//store
import Store from '../../store/store';
import { helper } from '../../utils/helper';

export const Navigation = (): ReactElement => {
  const { sectionMenuList, loadMenuSectionList } = Store;
  const menuListRef = useRef<MenuListRef>(null);

  return (
    <nav className={stl.categories_nav}>
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
