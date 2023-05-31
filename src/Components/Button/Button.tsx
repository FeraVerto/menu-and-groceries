export const Button = ({ ...props }) => {
  return (
    <button className={props.style} onClick={props.fn}>
      {props.text}
    </button>
  );
};
