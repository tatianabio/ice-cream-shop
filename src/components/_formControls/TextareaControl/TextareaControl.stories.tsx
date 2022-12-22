import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';
import React from 'react';
import StoryContainer from '../../utils/StoryContainer';
import Button from '../../atoms/Button';
import TextareaControl from './TextareaControl';

export default {
  title: 'Components/_FormControls/TextareaControl',
  component: TextareaControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3518&t=92fzZeIxuIo2Kxvs-4',
    },
  },
};

interface IDemoForm {
  textareaName1: string;
  textareaName2: string;
}

export const Demo = () => {
  const schema = object({
    textareaName1: string().required('This field is required.'),
    textareaName2: string().required('This field is required.'),
  });

  const form = useForm<IDemoForm>({
    defaultValues: {
      textareaName1: 'Default Value 1',
      textareaName2: 'Default Value 2',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: IDemoForm) => {
    action('onSubmit')(data);
    form.reset();
  };

  return (
    <StoryContainer
      title='Textarea Control: visible label, hidden label'
      text='Submit button is not included in the Textarea Control Component'
      hasPinkBackground={false}
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '400px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          <TextareaControl
            data-testid='demo-1'
            formField={{ name: 'textareaName1', label: 'The label is visible', tooltipText: 'Tooltip text' }}
            placeholder='Textarea with visible label'
          />
          <TextareaControl
            data-testid='demo-2'
            formField={{ name: 'textareaName2', label: 'The label is hidden', isLabelHidden: true, hasTooltip: false }}
            placeholder='Textarea with hidden label'
          />
          <Button data-testid='demo-button' text='Submit' variant='secondary' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
