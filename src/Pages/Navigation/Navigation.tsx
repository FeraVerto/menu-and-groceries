//libraries
import { NavLink } from 'react-router-dom';
import { ReactElement } from 'react';
//styles
import stl from './Navigation.module.css';
//components
import { AddCategory } from './AddCategory/AddCategory';
import { Cart } from '../Cart/Cart';
//store
import Store from '../../store/store';
import { helper } from '../../utils/helper';

export const Navigation = (): ReactElement => {
  const { sectionMenuList, loadMenuSectionList } = Store;

  const onClickHandler = (id: string) => {
    loadMenuSectionList(id);
  };

  const menuLinks = sectionMenuList.map((m) => (
    <li className={stl.categories_nav_item} key={m.sectionId}>
      <NavLink
        to={`/${encodeURIComponent(m.sectionName.replace(/\s/g, ''))}`}
        onClick={() => onClickHandler(m.sectionId)}
      >
        {m.sectionName}
      </NavLink>
    </li>
  ));

  return (
    <nav className={stl.categories_nav}>
      <div>
        <Cart />
      </div>
      <ul className={stl.categories_nav_list}>{menuLinks}</ul>
      <AddCategory />
    </nav>
  );
};
