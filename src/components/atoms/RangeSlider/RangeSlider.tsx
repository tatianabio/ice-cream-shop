import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';

const RangeSlider = () => {
  return (
    <div className='range-slider'>
      <Slider
        className='range-slider__wrapper'
        range
        min={3}
        max={10}
        step={0.5}
        defaultValue={[4, 7.5]}
        allowCross={false}
        pushable={1}
      />
    </div>
  );
};

export default RangeSlider;
