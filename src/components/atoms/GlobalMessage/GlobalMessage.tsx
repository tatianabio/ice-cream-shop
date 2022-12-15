import React from 'react';
import shallow from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import messageStore, { IMessageStore } from './GlobalMessage.store';

const GlobalMessage = () => {
  const { t } = useTranslation();
  const messagesToDisplay = messageStore((store: IMessageStore) => store.messagesToDisplay, shallow);
  const displayMessagesList = messagesToDisplay.map((item) => {
    const { id, message, type } = item;

    return (
      <li key={id}>
        <h3>{t(type)}</h3>
        <span>{t(message)}</span>
      </li>
    );
  });

  if (!messagesToDisplay.length) {
    return <></>;
  }

  return (
    <section>
      <h2 className='visually-hidden'>{t('')}</h2>
      <ul>{displayMessagesList}</ul>
    </section>
  );
};

export default GlobalMessage;
