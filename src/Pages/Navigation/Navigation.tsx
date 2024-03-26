//libraries
import { ReactElement } from 'react';
//styles
import stl from './Navigation.module.css';
//components
import { AddCategory } from './AddCategory/AddCategory';
import { Cart } from '../Cart/Cart';
import { MenuList } from './MenuList/MenuList';
//store
import Store from '../../store/store';
import { helper } from '../../utils/helper';

export const Navigation = (): ReactElement => {
  const { sectionMenuList, loadMenuSectionList } = Store;

  return (
    <nav className={stl.categories_nav}>
      <Cart />
      <MenuList
        sectionMenuList={sectionMenuList}
        loadMenuSectionList={loadMenuSectionList}
      />
      <AddCategory />
    </nav>
  );
};
