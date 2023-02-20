import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormField } from '../FormField/FormField';
import FormField from '../FormField';
import RangeSlider, { IRangeSlider } from '../../atoms/RangeSlider/RangeSlider';

interface IRangeSliderControl extends IRangeSlider {
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const RangeSliderControl = ({ formField, 'data-testid': testId, ...props }: IRangeSliderControl) => {
  const { name } = formField;
  const {
    control,
    getValues,
    formState: { dirtyFields },
  } = useFormContext();

  const isDirtyField = dirtyFields[name];

  const defaultValue = isDirtyField ? undefined : getValues()[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChangeHandler = (value: number[]) => {
          field.onChange(value);
        };

        return (
          <FormField {...formField} data-testid={testId}>
            <RangeSlider
              {...props}
              value={defaultValue || field.value}
              data-testid={testId}
              onChange={onChangeHandler}
            />
          </FormField>
        );
      }}
    />
  );
};

export default RangeSliderControl;
