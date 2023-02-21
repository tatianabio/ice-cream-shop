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
      url: '',
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
    form.reset();
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
            measurementUnits='$'
            formField={{
              name: 'price',
              label: 'price',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
          />

          <Button data-testid='demo-button' text='Submit' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </StoryContainer>
  );
};
