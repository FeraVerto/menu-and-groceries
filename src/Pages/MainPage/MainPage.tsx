//libraries

//components
import { SidebarMenu } from '../../Components/SidebarMenu/SidebarMenu';
import { Cart } from '../Cart/Cart';
import { Content } from '../Content/Content';
import { Navigation } from '../Navigation/Navigation';
import { Tags } from '../Tags/Tags';
//styles
import stl from '../../App.module.css';
//Store
import Store from '../../store/store';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const { user } = Store;
  const navigate = useNavigate();

  if (!user.isAuth) {
    navigate(`/auth`);
  }
  return (
    <div>
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
    </div>
  );
};
