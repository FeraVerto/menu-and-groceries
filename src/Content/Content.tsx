import stl from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { Category } from './Categories/Category/Category';
import Store from '../store/store';
import { NavLink } from 'react-router-dom';

export const Content = () => {
  const { ingredients, categories } = Store;

  // const menuLinks = categories.map((m) => (
  //   <li className={stl.categories_nav_item} key={m.name}>
  //     <NavLink to={`/${m.name}`}>{m.name}</NavLink>
  //   </li>
  // ));

  const routes = categories.map((n) => (
    <Route
      key={n.name}
      path={`/${n.name}`}
      element={<Category name={n.name} dishes={n.dishes} igd={ingredients} />}
    />
  ));

  return (
    <main className={stl.content}>
      {/* <nav className={stl.categories_nav}>
        <ul className={stl.categories_nav_list}>{menuLinks}</ul>
      </nav> */}
      <Routes>
        {routes}
        <Route
          path="/menu-and-groceries"
          element={<div>Menu and groceries</div>}
        />
      </Routes>
    </main>
  );
};
