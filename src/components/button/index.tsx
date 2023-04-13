import React from 'react';
import cx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  startIcon?: React.ReactNode;
  children: React.ReactNode;
}

const styles = {
  variant: (
    variant: ButtonProps['variant'],
  ) => {
    if (variant === 'primary') {
      return 'text-grey-dark bg-secondary-medium hover:bg-secondary-dark';
    }
    if (variant === 'secondary') {
      return 'text-grey-dark border-[1px] border-grey-light bg-white hover:bg-primary-light font-light leading-5';
    }
    return 'primary';
  },
  size: (type: ButtonProps['size']) => {
    if (type === 'lg') return 'btn-lg';
    if (type === 'md') return 'btn-md';
    if (type === 'sm') return 'btn-sm';
    if (type === 'xs') return 'btn-xs';
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      className,
      startIcon,
      onClick,
      children,
      type,
      ...rest
    } = props;
    return (
      <button
        ref={ref}
        {...rest}
        type={props.type ? props.type : 'button'}
        onClick={props.onClick}
        className={cx(
          'rounded-lg',
          styles.variant(variant),
          styles.size(size),
          className
        )}
      >
        <>
        {startIcon && (
            <span
              className='mr-4'
            >
              {startIcon}
            </span>
          )}
          {children}
        </>
      </button>
    );
  }
);

export default Button;