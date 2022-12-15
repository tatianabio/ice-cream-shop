import React from 'react';
import shallow from 'zustand/shallow';
import messageStore, { IMessageStore } from './GlobalMessage.store';

const GlobalMessage = () => {
  const messagesToShow = messageStore((store: IMessageStore) => store.messagesToShow, shallow);
  const showMessages = messagesToShow.map((item) => {
    return (
      <div key={item.id}>
        <span>{item.message}</span>
      </div>
    );
  });

  return <div>{showMessages}</div>;
};

export default GlobalMessage;
