import React from 'react';
import Button from './Button';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

export const Demo = () => (
  <StoryContainer
    title='Buttons'
    text='Primary button (default, disabled, loading)'
    style={{
      backgroundColor: 'var(--special-light)',
      padding: '20px',
    }}
  >
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button data-testid='primary-button' text='order' variant='primary' />
      <Button
        disabled
        data-testid='primary-button'
        text='order'
        variant='primary'
      />
      <Button
        data-testid='primary-button'
        text='order'
        variant='primary'
        loading
      />
    </div>
  </StoryContainer>
);
