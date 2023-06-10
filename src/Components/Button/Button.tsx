//libraries
import { ReactElement } from 'react';
//styles
import stl from './Button.module.css';

export const Button = ({ ...props }): ReactElement => {
  const styles = {
    width: props.width,
    height: props.height,
  };

  return (
    <button
      disabled={props.disabled}
      style={styles}
      className={`${props.disabled ? stl.disabled_button : ''} ${
        props.type === 'close' ? stl.modal_button_close : stl.modal_button
      }`}
      onClick={props.onClick}
    >
      {props.img ? <img src={props.img} alt="close button" /> : props.text}
    </button>
  );
};
