import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../../atoms/Input';
import { IInput } from '../../atoms/Input/Input';
import FormField from '../FormField';
import { IFormField } from '../FormField/FormField';

interface IInputControl extends Omit<IInput, 'initialValue' | 'onChange' | 'isInvalid'> {
  /** The same list of attributes as the list of FormField Component apart from children element and data-testid */
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const InputControl = ({ formField, 'data-testid': testId, ...props }: IInputControl) => {
  const { name } = formField;
  const {
    control,
    getValues,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const isDirtyField = dirtyFields[name];
  const resetValue: string | undefined = useMemo(() => {
    return !isDirtyField ? getValues()[name] : undefined;
  }, [isDirtyField]);
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
          <FormField {...formField} data-testid={testId}>
            <Input
              {...props}
              data-testid={testId}
              id={`${name}-field`}
              initialValue={resetValue}
              onChange={onChangeHandler}
              isInvalid={!!errorText}
              aria-invalid={!!errorText}
            />
          </FormField>
        );
      }}
    />
  );
};

export default InputControl;
