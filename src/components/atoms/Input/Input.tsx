import React, { HTMLProps } from 'react';
import cx from 'classnames';
import './Input.scss';

interface IInput extends HTMLProps<HTMLInputElement> {
  isInvalid?: boolean;
  defaultValue?: string;
}

const Input = ({ isInvalid = false, defaultValue, ...props }: IInput) => {
  return <input {...props} value={defaultValue} className={cx('input', isInvalid && 'input--invalid')} />;
};

export default Input;
