import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';

import { action } from '@storybook/addon-actions';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Button from '../../atoms/Button';
import RangeSliderControl from './RangeSliderControl';

export default {
  title: 'Components/_FormControls/RangeSliderControl',
  component: RangeSliderControl,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3669&t=UkQKTE7rEahwT8yq-4',
    },
  },
};

interface IDemoForm {
  price: number[];
}

export const Demo = () => {
  const form = useForm<IDemoForm>({
    defaultValues: {
      price: [4, 9],
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: IDemoForm) => {
    action('onSubmit')(data);
  };

  return (
    <StoryContainer
      title='Range Slider Control: price range as an example'
      text='Submit button is not included in the Range Slider Control Component'
    >
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '500px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <RangeSliderControl
            data-testid='demo'
            onChange={action('onChange')}
            formField={{
              name: 'price',
              label: 'price',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
          />

          <Button data-testid='demo' text='Submit' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
