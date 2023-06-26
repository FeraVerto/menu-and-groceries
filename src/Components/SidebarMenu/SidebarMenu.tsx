//libraries
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//store
import Store from './../../store/store';
//styles
import stl from './Sidebar.module.css';

export const SidebarMenu = () => {
  const { _menu } = Store;
  const [isOpen, setOpen] = useState(false);

  const menuLinks = _menu.map((m) => (
    <li className={stl.sidebar_nav_item} key={m.name}>
      <NavLink to={`/${m.name}`}>{m.name}</NavLink>
    </li>
  ));

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${stl.sidebar_nav} ${isOpen ? `${stl.open}` : ''}`}>
      <ul>{menuLinks}</ul>
      <div
        className={`${stl.toggle_button} ${isOpen ? `${stl.open}` : ''}`}
        onClick={toggleMenu}
      >
        <span>{isOpen ? 'Закрыть меню' : 'Открыть меню'}</span>
      </div>
    </div>
  );
};
