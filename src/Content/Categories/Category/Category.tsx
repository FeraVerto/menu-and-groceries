import stl from './Category.module.css';

type category = {
  dishes: [];
};

export const Category = ({ dishes }: category) => {
  return (
    <div className={stl.categories}>
      <div></div>
    </div>
  );
};
