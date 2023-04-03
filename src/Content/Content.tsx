import stl from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { Category } from './Categories/Category/Category';
import { categories } from '../temp';
import { NavLink } from 'react-router-dom';

export const Content = () => {
  const menuLinks = categories.map((m) => (
    <li key={m.name}>
      <NavLink to={`/${m.name}`}>{m.name}</NavLink>
    </li>
  ));

  const routes = categories.map((n) => (
    <Route
      key={n.name}
      path={`/${n.name}`}
      element={<Category dishes={n.dishes} />}
    />
  ));

  return (
    <div className={stl.content}>
      <nav>
        <ul>{menuLinks}</ul>
      </nav>
      <Routes>
        {routes}
        <Route
          path="/menu-and-groceries"
          element={<div>Menu and groceries</div>}
        />
      </Routes>
    </div>
  );
};
