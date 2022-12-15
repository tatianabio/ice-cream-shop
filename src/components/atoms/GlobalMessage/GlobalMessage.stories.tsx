import React from 'react';
import GlobalMessage from './GlobalMessage';
import StoryContainer from '../../utils/StoryContainer';
import Button from '../Button';
import { sendMessageToDisplay } from './GlobalMessage.store';

export default {
  title: 'Components/Atoms/GlobalMessage',
  component: GlobalMessage,
};

export const Demo = () => {
  const onClickHandlerSuccess = () => sendMessageToDisplay('test');
  const onClickHandlerError = () => sendMessageToDisplay('test', 'error');

  return (
    <StoryContainer title='Global message'>
      <>
        <GlobalMessage />
        <Button data-testid='demo' text='Show success message' variant='primary' onClick={onClickHandlerSuccess} />
        <Button data-testid='demo1' text='Show error message' variant='primary' onClick={onClickHandlerError} />
      </>
    </StoryContainer>
  );
};
