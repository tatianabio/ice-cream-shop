import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import cx from 'classnames';
import Input from '../../atoms/Input';
import { IInput } from '../../atoms/Input/Input';

interface IInputControl extends Omit<IInput, 'initialValue' | 'onChange'> {
  /** Name of the input used for the identification of the input's value */
  name: string;
  /** Label of the input describing the input for users */
  label: string;
  /** Is the label hidden from users (NOT displayed on the screen)? */
  isLabelHidden: boolean;
}

const InputControl = ({ name, label, isLabelHidden, ...props }: IInputControl) => {
  const { control, getValues } = useFormContext();
  const initial = getValues()[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChangeHandler = (value: string) => {
          field.onChange(value);
        };
        return (
          <div className='input-control'>
            <label className={cx(isLabelHidden && 'visually-hidden')} htmlFor={name}>
              {label}
            </label>
            <Input {...props} id={name} initialValue={initial} onChange={onChangeHandler} />
          </div>
        );
      }}
    />
  );
};

export default InputControl;
