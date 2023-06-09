import React, { useState } from 'react';
import cx from 'clsx';
import { Icon } from '@iconify/react';


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'error';
  type?: string,
  label: string,
  value: any,
  placeholder?: string,
  className?: string;
  startIcon?: string;
}

const styles = {
  state: (
    state: InputProps['state'],
  ) => {
    if (state === 'default') {
      return 'text-grey-dark bg-white shadow-inner shadow-grey-light hover:border-[1px] border-secondary-medium px-[20px]';
    }
    if (state === 'error') {
      return 'text-grey-dark border-[1px] border-grey-light bg-white leading-5';
    }
    return 'primary';
  },
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      state,
      className,
      placeholder,
      startIcon,
      onClick,
      ...rest
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [passwordInputType, setPasswordInputType] = useState('password')
    
    return (
      <div className='relative mx-auto'>
      <input
        ref={ref}
        {...rest}
        type={props.type === 'password'? passwordInputType : 'input'}
        placeholder={props.placeholder}
        onClick={props.onClick}
        className={cx(
          'relative',
          'font-light',
          'rounded-lg',
          `bg-[url(/images/${props.startIcon}.png)]`,
          'bg-no-repeat',
          'bg-[left_15px_top_10px]',
          'bg-[length:30px_auto]',
          `placeholder:${props.startIcon && 'px-10'}`,
          `${props.startIcon? 'pl-14' : 'pl-6'}`,
          styles.state(state),
          className
        )}
      >
      </input>
      {props.startIcon && <img src={`/images/${props.startIcon}.png`} className="absolute ml-4 mr-2 w-[25px] top-[13px]" alt={`${props.startIcon}`} />}
      {props.type === 'password' && showPassword === true &&
        <Icon icon="heroicons-outline:eye" className="h-[25px] w-[25px] text-grey-light ml-[300px] absolute top-[13px] cursor-pointer" onClick={() => {setShowPassword(false); setPasswordInputType('password')}} />
      }
      {props.type === 'password' && showPassword === false &&
        <Icon icon="heroicons-outline:eye-off" className="h-[25px] w-[25px] text-grey-light ml-[300px] absolute top-[13px] cursor-pointer" onClick={() => {setShowPassword(true); setPasswordInputType('input')}}/>
      }
      </div>
    );
  }
);

export default Input;