import stl from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { Category } from './Categories/Category/Category';
//import { uuid } from 'uuidv4';

//временно
import { categories } from '../temp';
import { log } from 'console';

export const Content = () => {
  console.log(categories);
  return (
    <div className={stl.content}>
      <Routes>
        {categories.map((m) => (
          <Route path={`/${m.name}`} element={<Category dishes={m.dishes} />}>
            {m.name}
          </Route>
        ))}
      </Routes>
    </div>
  );
};
