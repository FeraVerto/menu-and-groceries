//style
import stl from './Tags.module.css';
//временно
import { tags } from '../../temp';
import { ReactElement } from 'react';

export const Tags = (): ReactElement => {
  return (
    <div className={`${stl.tags} ${stl.fixed_block}`}>
      <ul className={stl.tags_list}>
        {tags.map((m) => (
          <li className={stl.tags_item} key={m.id}>
            m.name
          </li>
        ))}
      </ul>
    </div>
  );
};
