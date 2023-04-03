import stl from './Header.module.css';
//import { uuid } from 'uuidv4';

//временно
import { tags } from '../temp';

export const Header = () => {
  return (
    <div className={stl.header}>
      <div className={stl.logo}>Menu</div>
      <div className={stl.tags}>
        {tags.map((m) => (
          <div>m.name</div>
        ))}
      </div>
    </div>
  );
};
