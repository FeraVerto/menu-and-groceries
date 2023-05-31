import stl from './Header.module.css';
import { Basket } from './Basket/Basket';
import broc from './../images/broccoli.svg';

//временно
import { tags } from '../temp';

export const Header = () => {
  return (
    <div className={stl.header}>
      <div className={stl.tags}>
        {tags.map((m) => (
          <div key={m.id}>m.name</div>
        ))}
      </div>
      <div className={stl.header_left_part}>
        <Basket />
        <img width="60px" src={broc} className={stl.logo} />
      </div>
    </div>
  );
};
