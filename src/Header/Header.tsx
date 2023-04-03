import stl from './Header.module.css';

//временно
import { tags } from '../temp';
import { Basket } from './Basket/Basket';

export const Header = () => {
  return (
    <div className={stl.header}>
      <div className={stl.headerLeft}>
        <div className={stl.logo}>Menu</div>
        <Basket />
      </div>
      <div className={stl.tags}>
        {tags.map((m) => (
          <div key={m.name}>m.name</div>
        ))}
      </div>
    </div>
  );
};
