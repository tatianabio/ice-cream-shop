import React from 'react';
import shallow from 'zustand/shallow';
import GlobalMessage from './GlobalMessage';
import StoryContainer from '../../utils/StoryContainer';
import Button from '../Button';
import messageStore, { IMessageStore } from './GlobalMessage.store';

export default {
  title: 'Components/Atoms/GlobalMessage',
  component: GlobalMessage,
};

export const Demo = () => {
  const createMessage = messageStore((store: IMessageStore) => store.createMessage, shallow);

  const onClickHandler = () => createMessage({ message: 'test', type: 'success', time: 3000 });

  return (
    <StoryContainer title='Global message'>
      <>
        <GlobalMessage />
        <Button data-testid='demo' text='Show messages' variant='primary' onClick={onClickHandler} />
      </>
    </StoryContainer>
  );
};
