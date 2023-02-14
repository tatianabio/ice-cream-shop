import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Button from '../../atoms/Button';
import CheckGroupControl from './CheckGroupControl';
import { filterFatContent, filterFillers, ICheckItem } from '../../atoms/CheckGroup/utils';

export default {
  title: 'Components/_FormControls/CheckGroupControl',
  component: CheckGroupControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3645&t=flHdb82fTzhp034H-4',
    },
  },
};

interface IDemoForm {
  fatContent: ICheckItem[];
  fillers: ICheckItem[];
}

export const Demo = () => {
  const form = useForm<IDemoForm>({
    defaultValues: {
      fatContent: [filterFatContent[1]],
      fillers: [filterFillers[0], filterFillers[1]],
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: IDemoForm) => {
    action('onSubmit')(data);
    form.reset();
  };

  return (
    <StoryContainer
      title='CheckGroup Control: radio-buttons as checkboxes examples'
      text='Submit button is not included in the CheckGroup Control Component'
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '500px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <CheckGroupControl
            checkGroup={filterFatContent}
            data-testid='demo'
            formField={{
              name: 'fatContent',
              label: 'fatContent',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
            }}
            inputType='radio'
          />
          <CheckGroupControl
            checkGroup={filterFillers}
            data-testid='demo'
            formField={{
              name: 'fillers',
              label: 'fillers',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
            }}
            inputType='checkbox'
          />
          <Button data-testid='demo-button' text='Submit' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
