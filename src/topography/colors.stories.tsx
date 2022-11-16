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
  'special-light': '#feafc3',
  'special-extra-light': '#ffcbd8',
  'special-blue': '#69a9ff',
  'special-yellow': '#fcc850',
};

const statusColors = {
  'status-error': '#ea5454',
  'status-warning': '#fd912e',
  'status-success': '#00e484',
};

export const Demo = () => {
  const colorsTsx = (object: Record<string, string>) => {
    let arr: ReactElement[] = [];

    for (let key in object) {
      arr.push(<ColorBox id={object[key]} title={key} />);
    }

    return arr;
  };

  return (
    <div className='color-story'>
      <h1 className='color-story__title'>Pallet</h1>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Basic colors</h2>
        <div className='color-section__body'>{colorsTsx(basicColors)}</div>
      </section>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Special colors</h2>
        <div className='color-section__body'>{colorsTsx(specialColors)}</div>
      </section>
      <section className='color-story__section color-section'>
        <h2 className='color-section__title'>Status colors</h2>
        <div className='color-section__body'>{colorsTsx(statusColors)}</div>
      </section>
    </div>
  );
};
