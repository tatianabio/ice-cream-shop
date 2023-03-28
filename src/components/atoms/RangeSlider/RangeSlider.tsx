import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';
import { SliderProps } from 'rc-slider/lib/Slider';

export interface IRangeSlider extends Omit<SliderProps<number | number[]>, 'onChange'> {
  onChange?: (value: number[]) => void;
  /** Technical attributes */
  'data-testid': string;
}

const sliderDefaults = {
  min: 3,
  max: 10,
  step: 1,
  pushable: 1,
};

const RangeSlider = ({ onChange, 'data-testid': testId, ...props }: IRangeSlider) => {
  const onChangeHandler = (data: number | number[]) => {
    Array.isArray(data) && onChange?.(data);
  };

  return (
    <div className='range-slider' data-testid={`${testId}-range-slider`}>
      <Slider
        {...sliderDefaults}
        {...props}
        className='range-slider__wrapper'
        range
        allowCross={false}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default RangeSlider;
