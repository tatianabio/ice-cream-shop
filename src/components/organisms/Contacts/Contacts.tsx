import React from 'react';
import { useTranslation } from 'react-i18next';
import BasicModal from '../BasicModal';
import FeedbackTile from '../../molecules/FeedbackTile';

interface IContacts {
  /** Technical attributes */
  'data-testid': string;
}

const Contacts = ({ 'data-testid': testId }: IContacts) => {
  const { t } = useTranslation();
  return (
    <section className='contacts' data-testid={`${testId}-contacts`}>
      <div className='contacts__container'>
        <h2 className='visually-hidden'>{t('ourContacts')}</h2>
        <dl className='contacts__list'>
          <dt className='contacts__item-term'>{t('ourAddress')}</dt>
          <dd className='contacts__item-description'>
            <p className='contacts__info'>{t('exactLocation')}</p>
          </dd>
          <dt className='contacts__item-term'>{t('ourPhoneContact')}</dt>
          <dd className='contacts__item-description'>
            <p className='contacts__info'>{t('exactPhoneNumber')}</p>
            <p className='contacts__extra_info'>{`(${t('phoneSchedule')})`}</p>
          </dd>
        </dl>
        <BasicModal data-testid={testId} openingButtonText='openFeedbackForm'>
          <FeedbackTile data-testid={testId} />
        </BasicModal>
      </div>
    </section>
  );
};

export default Contacts;
