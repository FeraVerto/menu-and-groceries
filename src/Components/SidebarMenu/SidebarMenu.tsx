//libraries
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//store
import Store from '../../stores/store';
//styles
import stl from './Sidebar.module.css';
import { helper } from './../../utils/helper';
import { observer } from 'mobx-react-lite';

export const SidebarMenu = observer(() => {
  const { menu } = Store.data;
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const menuLinks = menu?.map((m) => (
    <li className={stl.sidebar_nav_item} key={m.id} onClick={toggleMenu}>
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
});
