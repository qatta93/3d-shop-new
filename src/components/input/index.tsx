import React from 'react';
import cx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: 'default' | 'error';
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
      return 'text-grey-dark border-[1px] border-grey-light bg-white font-light leading-5';
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
    return (
      <input
        ref={ref}
        {...rest}
        type='input'
        placeholder={props.placeholder}
        onClick={props.onClick}
        className={cx(
          'rounded-lg',
          `bg-[url(/images/${props.startIcon}.png)]`,
          'bg-no-repeat',
          'bg-[left_15px_top_10px]',
          'bg-[length:30px_auto]',
          `placeholder:${props.startIcon && 'px-10'}`,
          'pl-14',
          styles.state(state),
          className
        )}
      >
      </input>
    );
  }
);

export default Input;