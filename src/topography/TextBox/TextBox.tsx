import React from 'react';
import './TextBox.scss';
import cx from 'classnames';

interface ITextBox {
  title: string;
  text?: string;
  className?: string;
}

const TextBox = ({ title, text, className }: ITextBox) => (
  <div className='text-box'>
    <div className={cx('text-box__title', className)}>{title}</div>
    <div className={cx('text-box__text', className)}>{text}</div>
  </div>
);

export default TextBox;
