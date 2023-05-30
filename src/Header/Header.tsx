import stl from './Header.module.css';
import { Basket } from './Basket/Basket';

//временно
import { tags } from '../temp';

export const Header = () => {
  return (
    <div className={stl.header}>
      <div className={stl.header_left_part}>
        <div className={stl.logo}>Menu</div>
        <Basket />
      </div>
      <div className={stl.tags}>
        {tags.map((m) => (
          <div key={m.id}>m.name</div>
        ))}
      </div>
    </div>
  );
};
