import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IFormField } from '../FormField/FormField';
import Select, { ISelect } from '../../atoms/Select/Select';
import FormField from '../FormField';
import { IOption } from '../../atoms/Select/utils';

interface ISelectControl extends ISelect {
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const SelectControl = ({ formField, 'data-testid': testId, ...props }: ISelectControl) => {
  const { name } = formField;
  const { control, getValues } = useFormContext();

  const defaultValue = getValues()[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChangeHandler = (selected: IOption) => {
          field.onChange(selected);
        };

        return (
          <FormField {...formField} data-testid={testId}>
            <Select {...props} data-testid={testId} initiallySelected={defaultValue} onChange={onChangeHandler} />
          </FormField>
        );
      }}
    />
  );
};

export default SelectControl;
