import { useContext } from 'react';
import { createContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Store from '../stores/store';

const authContext = createContext<any | undefined>(undefined);

// const useAuth = () => {
//   const [authed, setAuthed] = useState(false);
//   return {
//     authed,
//     login: () => {
//       return new Promise((res) => {
//         setAuthed(true);
//         res(true);
//       });
//     },

//     logout: () => {
//       return new Promise((res) => {
//         setAuthed(false);
//         res(false);
//       });
//     },
//   };
// };

export const AuthProvider = ({ children }: any) => {
  const { user } = Store.userStore;

  return (
    <authContext.Provider value={user.isAuth}>{children}</authContext.Provider>
  );
};

export const AuthConsumer = () => {
  return useContext(authContext);
};

export const RequireAuth = ({ children }: any) => {
  const { user } = Store.userStore;
  const location = useLocation();

  return user.isAuth ? (
    children
  ) : (
    <Navigate to="/auth" replace state={{ path: location.pathname }} />
  );
};
