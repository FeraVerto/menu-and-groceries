//libraries

//components
import { SidebarMenu } from '../../Components/SidebarMenu/SidebarMenu';
import { Cart } from '../Cart/Cart';
import { Content } from '../Content/Content';
import { Navigation } from '../Navigation/Navigation';
import { Tags } from '../Tags/Tags';
//styles
import stl from '../../App.module.css';
import stl2 from './../Content/Content.module.css';

//Store
import Store from '../../stores/store';
import { useEffect, useRef } from 'react';
import { DishesList } from '../Content/Categories/Category/DishesList';
import { helper } from '../../utils/helper';

export const MainPage = () => {
  const { fetchSectionsMenu } = Store.menuStore;
  const didRun = useRef(false);
  const { menu } = Store.data;

  useEffect(() => {
    if (!didRun.current) {
      didRun.current = true;
      fetchSectionsMenu();
    }
  }, [fetchSectionsMenu]);

  return (
    <main>
      <Cart />
      <div className={stl.App}>
        <div className={stl.nav_tablet}>
          {/* для планшета */}
          <SidebarMenu />
        </div>
        <div className={stl.nav}>
          <Navigation />
        </div>
        <Content />
        <Tags />
      </div>
    </main>
  );
};
