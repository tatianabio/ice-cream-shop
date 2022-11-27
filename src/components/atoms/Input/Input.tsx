import React, { ChangeEvent, HTMLProps, useEffect, useState } from 'react';
import cx from 'classnames';
import './Input.scss';

interface IInput extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'defaultValue'> {
  /** Does this input's value invalid or not? */
  isInvalid?: boolean;
  /** Initial value of the input after rendering */
  initialValue?: string;
  /** Technical attributes */
  'data-testid': string;
}

const Input = ({ isInvalid = false, initialValue, ...props }: IInput) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  return (
    <input
      {...props}
      value={value}
      onChange={onChangeHandler}
      className={cx('input', props.className, isInvalid && 'input--invalid')}
    />
  );
};

export default Input;
