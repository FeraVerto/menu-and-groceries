//libraries
import { NavLink } from 'react-router-dom';
import { ReactElement, useState } from 'react';
import { Button } from 'antd';
//styles
import stl from './Navigation.module.css';
//components
import { Cart } from '../Cart/Cart';
//store
import Store from '../../store/store';
import { AddDishModal } from '../Content/Categories/AddDishModal/AddDishModal';

export const Navigation = (): ReactElement => {
  const { _menu } = Store;
  const [isOpen, isOpenSet] = useState(false);

  const menuLinks = _menu.map((m) => (
    <li className={stl.categories_nav_item} key={m.name}>
      <NavLink to={`/${m.name}`}>{m.name}</NavLink>
    </li>
  ));

  const showModal = () => {
    isOpenSet(true);
  };

  return (
    <nav className={stl.categories_nav}>
      <div>
        <Cart />
        <Button onClick={showModal}>+</Button>
      </div>

      <AddDishModal isOpen={isOpen} setIsModalOpen={isOpenSet} />
      <ul className={stl.categories_nav_list}>{menuLinks}</ul>
    </nav>
  );
};
