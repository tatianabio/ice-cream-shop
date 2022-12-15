import React from 'react';
import './GlobalMessage.scss';
import shallow from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import messageStore, { IMessageStore } from './GlobalMessage.store';

const GlobalMessage = () => {
  const { t } = useTranslation();
  const messagesToDisplay = messageStore((store: IMessageStore) => store.messagesToDisplay, shallow);
  const displayMessagesList = messagesToDisplay.map((item) => {
    const { id, message, type } = item;

    return (
      <li
        className={cx(
          'global-message__item',
          type === 'success' && 'global-message__item--success',
          type === 'error' && 'global-message__item--error'
        )}
        key={id}
      >
        <h3 className='global-message__item-type'>{t(type)}</h3>
        <span className='global-message__item-text'>{t(message)}</span>
      </li>
    );
  });

  if (!messagesToDisplay.length) {
    return <></>;
  }

  return (
    <section className='global-message'>
      <h2 className='visually-hidden'>{t('statusMessagesList')}</h2>
      <ul className='global-message__list'>{displayMessagesList}</ul>
    </section>
  );
};

export default GlobalMessage;
