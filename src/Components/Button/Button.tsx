//libraries
import { ReactElement, useCallback } from 'react';
//styles
import stl from './Button.module.css';

export const Button = ({ ...props }): ReactElement => {
  const styles = {
    width: props.width,
    height: props.height,
  };

  const onKeyDownButton = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        props.onKeyDownFn();
      }
    },
    [props]
  );

  return (
    <button
      onKeyDown={props.type === 'close' ? onKeyDownButton : undefined}
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
