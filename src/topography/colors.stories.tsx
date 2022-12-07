import React, { ReactElement } from 'react';
import ColorBox from './ColorBox';
import './colors.stories.scss';

export default {
  title: 'Topography/Colors',
};

const basicColors = {
  'basic-extra-dark': '#2d3440',
  'basic-dark': '#565c66',
  'basic-neutral': '#b9b9b9',
  'basic-light': '#e7e7e7',
  'basic-extra-light': '#fcfcfc',
  'basic-white': '#ffffff',
};

const specialColors = {
  'special-extra-bright': '#ff2f64',
  'special-bright': '#ff4a78',
  'special-neutral': '#ff7799',
  'special-pink': '#feafc3',
  'special-light-pink': '#ffcbd8',
  'special-blue': '#69a9ff',
  'special-light-blue': '#9fc8ff',
  'special-yellow': '#fcc850',
  'special-light-yellow': '#fcdc92',
};

const statusColors = {
  'status-error': '#ea5454',
  'status-warning': '#fd912e',
  'status-success': '#00e484',
};

export const Demo = () => {
  const colorsTSX = (object: Record<string, string>) => {
    const arr: ReactElement[] = [];

    for (const key in object) {
      arr.push(<ColorBox id={object[key]} title={key} />);
    }

    return arr;
  };

  return (
    <div className='color-story'>
      <h1 className='color-story__title'>Pallet</h1>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Basic colors</h2>
        <div className='color-section__body'>{colorsTSX(basicColors)}</div>
      </section>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Special colors</h2>
        <div className='color-section__body'>{colorsTSX(specialColors)}</div>
      </section>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Status colors</h2>
        <div className='color-section__body'>{colorsTSX(statusColors)}</div>
      </section>
    </div>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=576%3A2677&t=mTfv2Qdgxem0exJb-4',
  },
};
