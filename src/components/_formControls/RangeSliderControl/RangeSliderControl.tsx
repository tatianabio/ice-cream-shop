import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormField } from '../FormField/FormField';
import FormField from '../FormField';
import RangeSlider from '../../atoms/RangeSlider';
import { IRangeSlider } from '../../atoms/RangeSlider/RangeSlider';

interface IRangeSliderControl extends IRangeSlider {
  formField: Omit<IFormField, 'children' | 'data-testid'>;
  /** Measurement units for the range slider if applicable */
  measurementUnits?: string;
  /** Technical attributes */
  'data-testid': string;
}

const RangeSliderControl = ({
  formField,
  'data-testid': testId,
  measurementUnits = '',
  ...props
}: IRangeSliderControl) => {
  const { t } = useTranslation();
  const { name, label } = formField;
  const {
    control,
    getValues,
    formState: { dirtyFields },
  } = useFormContext();
  const [[min, max], setRangeNumbers] = useState<number[]>(getValues()[name]);

  const defaultValue = dirtyFields[name] ? undefined : getValues()[name];

  useEffect(() => {
    defaultValue && setRangeNumbers(defaultValue);
  }, [defaultValue]);

  const fullLabel = `${t(label)}: ${min} ${measurementUnits} - ${max} ${measurementUnits}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChangeHandler = (value: number[]) => {
          setRangeNumbers(value);
          field.onChange(value);
        };

        return (
          <FormField {...formField} data-testid={testId} label={fullLabel}>
            <RangeSlider
              {...props}
              value={defaultValue || field.value}
              data-testid={testId}
              onChange={onChangeHandler}
              ariaLabelForHandle={[
                `Change the minimum limit of ${name} range.`,
                `Change the maximum limit of ${name} range.`,
              ]}
            />
          </FormField>
        );
      }}
    />
  );
};

export default RangeSliderControl;
