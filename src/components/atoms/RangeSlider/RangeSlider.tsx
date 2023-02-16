import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';

const RangeSlider = () => {
  return (
    <div className='range-slider'>
      <Slider className='range-slider__wrapper' range />
    </div>
  );
};

export default RangeSlider;
