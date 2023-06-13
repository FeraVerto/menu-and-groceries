//libraries
import { Route, Routes } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
//styles
import stl from './Content.module.css';
//components
import { Category } from './Categories/Category/Category';
//store
import Store from '../../store/store';

export const Content = observer((): ReactElement => {
  const { categories } = Store;

  const routes = categories?.map((n) => {
    return (
      <Route
        key={n.name}
        path={`/${n.name}`}
        element={<Category name={n.name} dishes={n.dishes} />}
      />
    );
  });

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
});
