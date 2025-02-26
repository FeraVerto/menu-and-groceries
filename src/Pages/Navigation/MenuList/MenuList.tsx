//libraries
import { NavLink } from 'react-router-dom';
import { forwardRef, useCallback, useEffect, useRef } from 'react';
//types
import { sectionsType } from '../../../stores/storeTypes';
//styles
import stl from '../MenuList/MenuList.module.css';
import { observer } from 'mobx-react-lite';

export interface MenuListRef {
  scrollTopToBottom: () => void;
}

export type MenuListType = {
  menu: sectionsType[];
  loadMenuSectionList: (id: string) => void;
};

export const MenuList = forwardRef<HTMLUListElement, MenuListType>(
  ({ menu, loadMenuSectionList }: MenuListType, ref) => {
    console.log('menu', menu);
    const containerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      const scrollToBottom = () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      };

      scrollToBottom();
    }, [menu]);

    const menuLinks = menu?.map((m) => (
      <li className={stl.categories_nav_item} key={m.sectionId}>
        <NavLink
          to={`/${encodeURIComponent(m.sectionName.replace(/\s/g, ''))}`}
          onClick={() => onClickHandler(m.sectionId)}
        >
          {m.sectionName}
        </NavLink>
      </li>
    ));

    const onClickHandler = useCallback(
      (id: string) => {
        loadMenuSectionList(id);
      },
      [loadMenuSectionList]
    );

    return (
      <ul className={stl.categories_nav_list} ref={containerRef}>
        {menuLinks}
      </ul>
    );
  }
);
