import stl from './Category.module.css';

type category = {
  name: string;
  dishes: [];
};

export const Category = ({ name, dishes }: category) => {
  return (
    <div className={stl.categories}>
      <div>{name}</div>
    </div>
  );
};
