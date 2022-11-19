import React from 'react';
import Button from './Button';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

export const Demo = () => (
  <StoryContainer title='Buttons' text='Primary button'>
    <Button data-testid='primary-button' text='order' variant='primary' />
  </StoryContainer>
);
