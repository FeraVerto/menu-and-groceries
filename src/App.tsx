//libraries
import { observer } from 'mobx-react-lite';
import { Route, Routes, useNavigate } from 'react-router';
//styles
import { useEffect } from 'react';
//store
import Store from './stores/store';
//components
import { AuthPage } from './Pages/Auth/Auth';
import { helper } from './utils/helper';
import { Register } from './Pages/Register/Register';
import { MainPage } from './Pages/MainPage/MainPage';
//hooks
import { AuthConsumer, AuthProvider, RequireAuth } from './hooks/useAuth';
import { Divider } from 'antd';
import { DishesList } from './Pages/Content/Categories/Category/DishesList';

const App = observer(() => {
  // const { ingredients } = Store.shoppingListStore;
  const { user } = Store.userStore;
  const navigate = useNavigate();

  useEffect(() => {
    // if (user.isAuth) {
    //   navigate('/lk/');
    // }
  }, [user.isAuth, navigate]);

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/lk/*"
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
});

export default App;
