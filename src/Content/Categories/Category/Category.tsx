import stl from './Category.module.css';

type category = {
  name: string;
  dishes: { image: string; dishName: string; ingredients: string[] }[];
};

export const Category = ({ name, dishes }: category) => {
  return (
    <div className={stl.categories}>
      <div>{name}</div>
    </div>
  );
};
