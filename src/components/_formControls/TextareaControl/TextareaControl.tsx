import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Textarea, { ITextarea } from '../../atoms/Textarea/Textarea';
import FormField, { IFormField } from '../FormField/FormField';

interface ITextareaControl extends Omit<ITextarea, 'initialValue' | 'isInvalid' | 'onChange'> {
  /** The same list of attributes as the list of FormField Component apart from children element and data-testid */
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Technical attributes */
  'data-testid': string;
}

const TextareaControl = ({ formField, 'data-testid': testId, ...props }: ITextareaControl) => {
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
            <Textarea
              {...props}
              initialValue={resetValue}
              id={`${name}-field`}
              data-testid={testId}
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

export default TextareaControl;
