import stl from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { Category } from './Categories/Category/Category';
import Store from '../store/store';

export const Content = () => {
  const { ingredients, categories } = Store;

  const routes = categories.map((n) => (
    <Route
      key={n.name}
      path={`/${n.name}`}
      element={<Category name={n.name} dishes={n.dishes} igd={ingredients} />}
    />
  ));

  return (
    <main className={`${stl.content} ${stl.scrollable_block}`}>
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
