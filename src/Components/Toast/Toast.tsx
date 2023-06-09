//libraries
import cogoToast, { CTReturn } from 'cogo-toast';
//styles
import stl from './Toast.module.css';

type toast = {
  typeToast: 'success' | 'info' | 'loading' | 'warn' | 'error';
  text: string;
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  actionText: string;
};

export const Toast = ({ ...props }: toast): CTReturn => {
  return cogoToast[`${props.typeToast}`](
    <div className={stl.ct_toast_product_added}>
      <b>{props.actionText}</b>
      <div>{props.text}</div>
    </div>,
    {
      position: `${props.position}`,
    }
  );
};
