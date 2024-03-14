//libraries
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//store
import Store from './../../store/store';
//styles
import stl from './Sidebar.module.css';

export const SidebarMenu = () => {
  const { sectionMenuList } = Store;
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const menuLinks = sectionMenuList.map((m) => (
    <li className={stl.sidebar_nav_item} key={m.sectionId} onClick={toggleMenu}>
      <NavLink to={`/${encodeURIComponent(m.sectionName?.replace(/\s/g, ''))}`}>
        {m.sectionName}
      </NavLink>
    </li>
  ));

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
