//libraries
import { NavLink, useNavigate } from 'react-router-dom';
import { forwardRef, useCallback, useEffect, useRef } from 'react';
//types
import { sectionsType } from '../../../stores/storeTypes';
//styles
import stl from '../MenuList/MenuList.module.css';
import { observer } from 'mobx-react-lite';
import { helper } from '../../../utils/helper';

export interface MenuListRef {
  scrollTopToBottom: () => void;
}

export type MenuListType = {
  menu: sectionsType[];
  loadMenuSectionList: (id: string) => void;
};

export const MenuList = forwardRef<HTMLUListElement, MenuListType>(
  ({ menu, loadMenuSectionList }: MenuListType, ref) => {
    const containerRef = useRef<HTMLUListElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const scrollToBottom = () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      };

      scrollToBottom();
    }, [menu]);

    const menuLinks = menu?.map((m) => {
      return (
        <li
          key={m.id}
          className={stl.categories_nav_item}
          onClick={() => onClickHandler(m.sectionName)}
        >
          {/* <NavLink
            to={`/${m.sectionName?.replace(/\s/g, '')}`}
            //to={`/${m.sectionName}`}
            onClick={() => onClickHandler(m.sectionName)}
          > */}
          {m.sectionName}
          {/* </NavLink> */}
        </li>
      );
    });

    const onClickHandler = useCallback(
      (sectionName: string) => {
        navigate(`/lk/${sectionName.replace(/\s/g, '')}`);
      },
      [navigate]
    );

    return (
      <ul className={stl.categories_nav_list} ref={containerRef}>
        {menuLinks}
      </ul>
    );
  }
);
