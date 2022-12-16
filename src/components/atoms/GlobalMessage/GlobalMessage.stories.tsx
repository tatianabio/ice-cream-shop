import React from 'react';
import './GlobalMessage.scss';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import GlobalMessage from './GlobalMessage';
import StoryContainer from '../../utils/StoryContainer';
import Button from '../Button';
import { sendMessageToDisplay } from './GlobalMessage.store';

export default {
  title: 'Components/Atoms/GlobalMessage',
  component: GlobalMessage,
};

export const Demo = () => {
  const onClickHandlerSuccess = () => sendMessageToDisplay('successfulSubmission');
  const onClickHandlerError = () => sendMessageToDisplay('errorMessage', 'error');
  const { t } = useTranslation();

  return (
    <>
      <StoryContainer title='Global message' text='Examples of a success message and an error message'>
        <ul className='global-message__list'>
          <li className={cx('global-message__item', 'global-message__item--success')}>
            <h3 className='global-message__item-type'>{t('success')}</h3>
            <span className='global-message__item-text'>{t('successfulSubmission')}</span>
          </li>
          <li className={cx('global-message__item', 'global-message__item--error')}>
            <h3 className='global-message__item-type'>{t('error')}</h3>
            <span className='global-message__item-text'>{t('errorMessage')}</span>
          </li>
        </ul>
      </StoryContainer>
      <StoryContainer text='Click the buttons below to see the global messages on the screen'>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <GlobalMessage data-testid='demo' />
          <Button data-testid='success' text='Show success message' variant='primary' onClick={onClickHandlerSuccess} />
          <Button data-testid='error' text='Show error message' variant='primary' onClick={onClickHandlerError} />
        </div>
      </StoryContainer>
    </>
  );
};
