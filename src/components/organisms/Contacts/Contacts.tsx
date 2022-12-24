import React from 'react';
import './Contacts.scss';
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
            <address className='contacts__info'>{t('exactLocation')}</address>
          </dd>
          <dt className='contacts__item-term'>{t('ourPhoneContact')}</dt>
          <dd className='contacts__item-description'>
            <address className='contacts__info'>
              <a href='tel:+1111111111' className='contacts__phone'>
                +1(111)111-111
              </a>
            </address>
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
