import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CheckGroup, { ICheckGroup } from '../../atoms/CheckGroup/CheckGroup';
import { IFormField } from '../FormField/FormField';
import FormField from '../FormField';
import { ICheckItem } from '../../atoms/CheckGroup/utils';

interface ICheckGroupControl extends Omit<ICheckGroup, 'name'> {
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const CheckGroupControl = ({ formField, 'data-testid': testId, onChange, ...props }: ICheckGroupControl) => {
  const { name } = formField;
  const {
    control,
    getValues,
    formState: { dirtyFields },
  } = useFormContext();

  const isDirtyField = dirtyFields[name];

  const resetValue = useMemo(() => {
    return isDirtyField ? undefined : getValues()[name];
  }, [isDirtyField]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChangeHandler = (checked: ICheckItem[]) => {
          field.onChange(checked);
          onChange?.(checked);
        };

        return (
          <FormField {...formField} data-testid={testId}>
            <CheckGroup {...props} data-testid={testId} initiallyChecked={resetValue} onChange={onChangeHandler} />
          </FormField>
        );
      }}
    />
  );
};

export default CheckGroupControl;
