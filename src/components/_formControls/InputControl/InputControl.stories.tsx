import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';
import { action } from '@storybook/addon-actions';
import InputControl from './InputControl';
import StoryContainer from '../../utils/StoryContainer';
import Button from '../../atoms/Button';

export default {
  title: 'Components/_FormControls/InputControl',
  component: InputControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3518&t=etUZhYggKcyNAuF6-4',
    },
  },
};

interface IDemoForm {
  inputName1: string;
  inputName2: string;
}

export const Demo = () => {
  const form = useForm<IDemoForm>({
    defaultValues: {
      inputName1: 'Default Value 1',
      inputName2: 'Default Value 2',
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: IDemoForm) => {
    action('onSubmit')(data);
    form.reset();
  };

  return (
    <StoryContainer
      title='Input Control: visible label, hidden label'
      text='Submit button is not included in the Input Control Component'
      hasPinkBackground={false}
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '400px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          <InputControl
            type='text'
            data-testid='demo'
            name='inputName1'
            isLabelHidden={false}
            label='The label of the input is visible'
          />
          <InputControl
            type='text'
            data-testid='demo'
            name='inputName2'
            isLabelHidden
            label='The label of the input is hidden'
          />

          <Button data-testid='demo' text='Submit' variant='secondary' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
