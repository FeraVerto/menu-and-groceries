import stl from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Store from '../store/store';
import { Cart } from '../Cart/Cart';

export const Navigation = () => {
  const { categories } = Store;

  const menuLinks = categories.map((m) => (
    <li className={stl.categories_nav_item} key={m.name}>
      <NavLink to={`/${m.name}`}>{m.name}</NavLink>
    </li>
  ));
  return (
    <nav className={`${stl.categories_nav}`}>
      <div className={stl.header_left_part}>
        <Cart />
      </div>
      <ul className={stl.categories_nav_list}>{menuLinks}</ul>
    </nav>
  );
};
