//libraries
import { NavLink } from 'react-router-dom';
//types
import { sectionListType } from '../../../store/storeTypes';
//styles
import stl from '../MenuList/MenuList.module.css';

export type MenuList = {
  sectionMenuList: sectionListType[];
  loadMenuSectionList: (id: string) => void;
};

export const MenuList = ({
  sectionMenuList,
  loadMenuSectionList,
}: MenuList) => {
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

  return <ul className={stl.categories_nav_list}>{menuLinks}</ul>;
};
