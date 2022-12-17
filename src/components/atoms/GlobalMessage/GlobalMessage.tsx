import React, { useEffect } from 'react';
import './GlobalMessage.scss';
import shallow from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import messageStore, { IMessageStore, removeAllMessages } from './GlobalMessage.store';

interface IGlobalMessage {
  /** Technical attributes */
  'data-testid': string;
}

const GlobalMessage = ({ 'data-testid': testId }: IGlobalMessage) => {
  const { t } = useTranslation();

  useEffect(() => () => removeAllMessages(), []);
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
        data-testid={`${testId}-global-message`}
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
