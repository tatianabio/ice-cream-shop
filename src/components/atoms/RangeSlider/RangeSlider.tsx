import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';
import { SliderProps } from 'rc-slider/lib/Slider';

const sliderDefaults = {
  min: 3,
  max: 10,
  step: 0.5,
  pushable: 1,
};

const RangeSlider = (props: SliderProps<number | number[]>) => {
  const onChangeHandler = (data: number[]) => {
    console.log(data);
  };

  return (
    <div className='range-slider'>
      <Slider
        {...sliderDefaults}
        {...props}
        className='range-slider__wrapper'
        range
        defaultValue={[4, 7.5]}
        allowCross={false}
        onChange={() => onChangeHandler}
      />
    </div>
  );
};

export default RangeSlider;
