import React from 'react';
import './InputControl.scss';
import { Controller, useFormContext } from 'react-hook-form';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import Input from '../../atoms/Input';
import { IInput } from '../../atoms/Input/Input';

interface IInputControl extends Omit<IInput, 'initialValue' | 'onChange' | 'isInvalid'> {
  /** Name of the input used for the identification of the input's value */
  name: string;
  /** Label of the input describing the input for users */
  label: string;
  /** Is the label hidden from users (NOT displayed on the screen)? */
  isLabelHidden: boolean;
  /** Does the input have a tooltip? */
  hasTooltip: boolean;
}

const InputControl = ({ name, label, isLabelHidden, hasTooltip, ...props }: IInputControl) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();
  const initial = getValues()[name];
  const { t } = useTranslation();
  const errorText = (errors[name]?.message as string) || '';

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
            <div className='input-control__label-wrapper'>
              <label
                className={cx('input-control__label', isLabelHidden && 'visually-hidden')}
                htmlFor={`${name}-input`}
              >
                {label}
              </label>
              {hasTooltip && (
                <span className='input-control__tooltip'>
                  <button type='button' aria-label='Show tooltip' className='input-control__tooltip-toggle' />
                  <span className='input-control__tooltip-text'>{t('')}</span>
                </span>
              )}
            </div>
            <Input
              {...props}
              id={`${name}-input`}
              initialValue={initial}
              onChange={onChangeHandler}
              isInvalid={!!errorText}
            />
            <p className='input-control__error-message'>{errorText}</p>
          </div>
        );
      }}
    />
  );
};

export default InputControl;
