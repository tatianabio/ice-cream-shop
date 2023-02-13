import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Button from '../../atoms/Button';
import CheckGroupControl from './CheckGroupControl';
import InputControl from '../InputControl';
import { filterFatContent, ICheckItem } from '../../atoms/CheckGroup/utils';

export default {
  title: 'Components/_FormControls/CheckGroupControl',
  component: CheckGroupControl,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

interface IDemoForm {
  inputName1: string;
  fatContent: ICheckItem[];
}

export const Demo = () => {
  const form = useForm<IDemoForm>({
    defaultValues: {
      inputName1: 'Default Value 1',
      fatContent: [filterFatContent[2]],
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: IDemoForm) => {
    action('onSubmit')(data);
    // form.reset();
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
            formField={{
              name: 'inputName1',
              label: 'The label of the input is visible',
              tooltipText: 'Tooltip text',
            }}
            type='text'
            data-testid='demo-1'
            placeholder='Input with visible label'
          />
          <CheckGroupControl
            checkGroup={filterFatContent}
            data-testid='demo'
            formField={{
              name: 'fatContent',
              label: 'Fat content',
              hasTooltip: false,
              isLabelHidden: true,
            }}
            inputType='radio'
          />
          <Button data-testid='demo-button' text='Submit' variant='secondary' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
