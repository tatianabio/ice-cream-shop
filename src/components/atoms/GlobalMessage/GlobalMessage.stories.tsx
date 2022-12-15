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
  const onClickHandler = () => sendMessageToDisplay('test');

  return (
    <StoryContainer title='Global message'>
      <>
        <GlobalMessage />
        <Button data-testid='demo' text='Show messages' variant='primary' onClick={onClickHandler} />
      </>
    </StoryContainer>
  );
};
