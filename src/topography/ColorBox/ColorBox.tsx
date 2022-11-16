import React from 'react';
import './ColorBox.scss';

interface IColorBox {
  id: string;
  title: string;
}

const ColorBox = ({ id, title }: IColorBox) => {
  return (
    <div className='color-box'>
      <div
        className='color-box__square'
        style={{ backgroundColor: `var(--${title})` }}
      />
      <span className='color-box__title'>{title}</span>
      <span className='color-box__id'>{id}</span>
    </div>
  );
};

export default ColorBox;
