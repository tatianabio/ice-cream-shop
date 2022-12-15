import React from 'react';
import shallow from 'zustand/shallow';
import messageStore, { IMessageStore } from './GlobalMessage.store';

const GlobalMessage = () => {
  const messagesToDisplay = messageStore((store: IMessageStore) => store.messagesToDisplay, shallow);
  const displayMessagesList = messagesToDisplay.map((item) => {
    const { id, message } = item;

    return (
      <li key={id}>
        <span>{message}</span>
      </li>
    );
  });

  return <ul>{displayMessagesList}</ul>;
};

export default GlobalMessage;
