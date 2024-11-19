//libraries
import { observer } from 'mobx-react-lite';
import { Route, Routes, useNavigate } from 'react-router-dom';
//styles
import { useEffect } from 'react';
//store
import Store from './store/store';
//components
import { AuthPage } from './Pages/Auth/Auth';
import { helper } from './utils/helper';
import { Register } from './Pages/Register/Register';
import { MainPage } from './Pages/MainPage/MainPage';

const App = observer(() => {
  const { ingredients, sectionMenuList, user } = Store;
  const navigate = useNavigate();

  //временно, запускается дважды
  useEffect(() => {
    // if (sectionMenuList.length === 0) {
    //   // Store.loadSectionMenu();
    // }
    // if (Object.keys(ingredients).length === 0) {
    //   // Store.loadIngredients();
    // }
  }, []);

  if (user.isAuth) {
    navigate(`/lk`);
  }

  return (
    <>
      <div>
        <Routes>
          <Route path="/lk" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {/* )} */}
    </>
  );
});

export default App;
