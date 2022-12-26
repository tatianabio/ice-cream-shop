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
        <ul className='contacts__list'>
          <li className='contacts__item'>
            <p className='contacts__description'>{t('ourAddress')}</p>
            <p className='contacts__info'>{t('exactLocation')}</p>
          </li>
          <li className='contacts__item'>
            <p className='contacts__description'>{t('ourPhoneContact')}</p>
            <a href='tel:+1111111111' className='contacts__info contacts__phone'>
              +1(111)111-111
            </a>
            <p className='contacts__extra_info'>{`(${t('phoneSchedule')})`}</p>
          </li>
        </ul>
        <BasicModal data-testid={testId} openingButtonText='openFeedbackForm'>
          <FeedbackTile data-testid={testId} />
        </BasicModal>
      </div>
    </section>
  );
};

export default Contacts;
