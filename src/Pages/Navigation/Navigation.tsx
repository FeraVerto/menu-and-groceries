//libraries
import { NavLink } from 'react-router-dom';
import { ReactElement } from 'react';
//styles
import stl from './Navigation.module.css';
//components
import { Cart } from '../Cart/Cart';
//store
import Store from '../../store/store';

export const Navigation = (): ReactElement => {
  const { categories } = Store;

  const menuLinks = categories.map((m) => (
    <li className={stl.categories_nav_item} key={m.name}>
      <NavLink to={`/${m.name}`}>{m.name}</NavLink>
    </li>
  ));

  return (
    <nav className={stl.categories_nav}>
      <Cart />
      <ul className={stl.categories_nav_list}>{menuLinks}</ul>
    </nav>
  );
};
