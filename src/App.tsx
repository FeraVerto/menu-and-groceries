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
import { helper } from './utils/helper';
import { Cart } from './Pages/Cart/Cart';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Register } from './Pages/Register/Register';

const App = observer(() => {
  const { ingredients, isAuth, sectionMenuList } = Store;

  //временно, запускается дважды
  useEffect(() => {
    if (sectionMenuList.length === 0) {
      Store.loadSectionMenu();
    }

    if (Object.keys(ingredients).length === 0) {
      Store.loadIngredients();
    }
  }, [sectionMenuList, ingredients]);

  return (
    <>
      {isAuth ? (
        <>
          <Cart />
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
        </>
      ) : (
        <div>
          Hello
          {/* <AuthPage /> */}
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      )}
    </>
  );
});

export default App;
