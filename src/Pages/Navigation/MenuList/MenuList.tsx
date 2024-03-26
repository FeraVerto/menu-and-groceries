//libraries
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
//types
import { sectionListType } from '../../../store/storeTypes';
//styles
import stl from '../MenuList/MenuList.module.css';

export interface MenuListRef {
  scrollTopToBottom: () => void;
}

export type MenuListType = {
  sectionMenuList: sectionListType[];
  loadMenuSectionList: (id: string) => void;
  ref: any;
};

export const MenuList = ({
  sectionMenuList,
  loadMenuSectionList,
}: MenuListType) => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [sectionMenuList]);

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

  const onClickHandler = (id: string) => {
    loadMenuSectionList(id);
  };

  return (
    <ul className={stl.categories_nav_list} ref={containerRef}>
      {menuLinks}
    </ul>
  );
};
