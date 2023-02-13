import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CheckGroup, { ICheckGroup } from '../../atoms/CheckGroup/CheckGroup';
import { IFormField } from '../FormField/FormField';
import FormField from '../FormField';

interface ICheckGroupControl extends Omit<ICheckGroup, 'name'> {
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const CheckGroupControl = ({ formField, 'data-testid': testId, ...props }: ICheckGroupControl) => {
  const { name } = formField;
  const { control, getValues } = useFormContext();

  const currentValue = getValues()[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormField {...formField} data-testid={testId}>
            <CheckGroup data-testid={testId} {...props} initiallyChecked={currentValue} />
          </FormField>
        );
      }}
    />
  );
};

export default CheckGroupControl;
