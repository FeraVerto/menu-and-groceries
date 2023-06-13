//libraries
import { observer } from 'mobx-react-lite';
//styles
import { useEffect } from 'react';
import stl from './App.module.css';
//components
import { Content } from './Pages/Content/Content';
import { Navigation } from './Pages/Navigation/Navigation';
import { Tags } from './Pages/Tags/Tags';
//store
import Store from './store/store';

//дебаг
//const data = toJS(ingredients);
//temp/don't delete
//import { toJS } from 'mobx';

const App = observer(() => {
  const { categories, ingredients } = Store;

  useEffect(() => {
    if (categories.length === 0 || Object.keys(ingredients).length === 0) {
      Store.loadDishes();
      Store.loadIngredients();
    }
  }, [categories, ingredients]);

  return (
    <div className={stl.App}>
      <Navigation />
      <Content />
      <Tags />
    </div>
  );
});

export default App;
