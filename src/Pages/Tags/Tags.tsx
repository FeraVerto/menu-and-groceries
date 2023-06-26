//libraries
import { ReactElement, useState } from 'react';
//style
import stl from './Tags.module.css';
//временно
import { tags } from '../../temp';

export const Tags = (): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const tagsItems = tags.map((m) => (
    <li className={stl.tags_item} key={m.id}>
      m.name
    </li>
  ));

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${stl.sidebar_tags} ${isOpen ? `${stl.open}` : ''}`}>
      <ul className={stl.sidebar_tags_item}>{tagsItems}</ul>
      <div
        className={`${stl.toggle_button} ${isOpen ? `${stl.open}` : ''}`}
        onClick={toggleMenu}
      >
        <span>{isOpen ? 'Закрыть тэги' : 'Открыть тэги'}</span>
      </div>
    </div>
  );
};
