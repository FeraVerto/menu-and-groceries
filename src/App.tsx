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
import { SidebarMenu } from './Components/SidebarMenu/SidebarMenu';
import { AuthPage } from './Pages/Auth/Auth';

const App = observer(() => {
  const { _menu: categories, _ingredients: ingredients, isAuth } = Store;

  useEffect(() => {
    if (categories.length === 0 || Object.keys(ingredients).length === 0) {
      Store.loadDishes();
      Store.loadIngredients();
    }
  }, [categories, ingredients]);

  return (
    <>
      {isAuth ? (
        <div className={stl.App}>
          <div className={stl.nav_tablet}>
            <SidebarMenu />
          </div>
          <div className={stl.nav}>
            <Navigation />
          </div>
          <Content />
          <Tags />
        </div>
      ) : (
        <AuthPage />
      )}
    </>
  );
});

export default App;
