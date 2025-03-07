//libraries
import { Route, Routes } from 'react-router-dom';
import { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
//styles
import stl from './Content.module.css';
//components
import { DishesList } from './Categories/Category/DishesList';
//store
import Store from '../../stores/store';
import { helper } from '../../utils/helper';

export const Content = observer((): ReactElement => {
  const { menu } = Store.data;
  const routes = menu?.map((n) => {
    const sectionName = n.sectionName.replace(/\s/g, '');
    return (
      <Route
        key={n.id}
        path={`/${sectionName}`}
        element={
          <DishesList
            menuSection={{
              id: n.id,
              sectionName: n.sectionName,
              dishes: n.dishes,
            }}
          />
        }
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
