import { FormProvider, useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import StoryContainer from '../../utils/StoryContainer';
import FormField from './FormField';

export default {
  title: 'Components/_FormControls/FormField',
  component: FormField,
};

interface IDemoForm {
  fieldName1: string;
  fieldName2: string;
}

export const Demo = () => {
  const schema = object({
    fieldName1: string().required('This field is required.'),
  });

  const form = useForm<IDemoForm>({
    defaultValues: {
      fieldName1: 'Default Value 1',
      fieldName2: 'Default Value 2',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    form.setError('fieldName1', { type: 'custom', message: 'Custom error message' });
    form.setError('fieldName2', { type: 'custom', message: 'Custom error message' });
  }, []);

  return (
    <FormProvider {...form}>
      <form style={{ width: '400px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <StoryContainer title='Form Field' text='Visible bold label with tooltip and error message'>
          <FormField label='Test label' name='fieldName1' data-testid='test-1' tooltipText='tooltip text'>
            Test Field
          </FormField>
        </StoryContainer>
        <StoryContainer text='Visible normal label with error message, but without tooltip' hasPinkBackground={false}>
          <FormField label='Test label' name='fieldName2' isLabelBold={false} hasTooltip={false} data-testid='test-2'>
            Test Field
          </FormField>
        </StoryContainer>
        <StoryContainer text='Hidden label without error message'>
          <FormField
            label='Test label'
            name='fieldName3'
            isLabelHidden
            hasTooltip={false}
            hasErrorMessage={false}
            data-testid='test-3'
          >
            Test Field
          </FormField>
        </StoryContainer>
      </form>
    </FormProvider>
  );
};
