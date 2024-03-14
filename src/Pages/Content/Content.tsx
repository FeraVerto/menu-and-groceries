//libraries
import { Route, Routes } from 'react-router-dom';
import { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
//styles
import stl from './Content.module.css';
//components
import { Category } from './Categories/Category/Category';
//store
import Store from '../../store/store';
import { helper } from '../../utils/helper';

export const Content = observer((): ReactElement => {
  const { menu } = Store;
  const routes = menu?.map((n) => {
    return (
      <Route
        key={n.sectionId}
        path={`/${n.sectionName?.replace(/\s/g, '')}`}
        //path={`/${n.sectionName}`}
        element={<Category name={n.sectionName} dishes={n.dishes} />}
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
