import stl from './Button.module.css';

export const Button = ({ ...props }) => {
  const styles = {
    width: props.width,
    height: props.height,
  };

  return (
    <button
      style={styles}
      className={`${
        props.type === 'close' ? stl.modal_button_close : stl.modal_button
      }`}
      onClick={props.onClick}
    >
      {props.img ? <img src={props.img} alt="close button" /> : props.text}
    </button>
  );
};
