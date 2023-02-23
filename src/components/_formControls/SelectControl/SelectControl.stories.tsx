import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Button from '../../atoms/Button';
import SelectControl from './SelectControl';
import sortingOptions, { IOption } from '../../atoms/Select/utils';

export default {
  title: 'Components/_FormControls/SelectControl',
  component: SelectControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3680&t=ur3H8vxAiBPVX0td-4',
    },
  },
};

interface IDemoForm {
  sorting: IOption;
}

export const Demo = () => {
  const form = useForm<IDemoForm>({
    defaultValues: {
      sorting: sortingOptions[1],
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
      title='Select Control: sorting as an example'
      text='Submit button is not included in the Select Control Component'
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '500px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <SelectControl
            data-testid='demo'
            formField={{
              name: 'sorting',
              label: 'sorting',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
            optionsList={sortingOptions}
            selectLabel='sorting'
          />

          <Button data-testid='demo-button' text='Submit' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
