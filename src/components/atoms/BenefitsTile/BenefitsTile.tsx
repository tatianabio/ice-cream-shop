import React from 'react';
import './BenefitsTile.scss';
import { useTranslation } from 'react-i18next';

interface IBenefitsTile {
  'data-testid'?: string;
}

const BenefitsTile = ({ 'data-testid': testId = 'benefits-tile' }: IBenefitsTile) => {
  const { t } = useTranslation();

  return (
    <section className='benefits-tile' data-testid={`${testId}-section`}>
      <div className='benefits-tile__container'>
        <h2 className='benefits-tile__title'>{t('benefitsTitle')}</h2>
        <ul className='benefits-tile__list'>
          <li className='benefits-tile__item'>
            <p className='benefits-tile__benefit benefits-tile__benefit--manufacturing'>{t('benefitManufacturing')}</p>
          </li>
          <li className='benefits-tile__item'>
            <p className='benefits-tile__benefit benefits-tile__benefit--farms'>{t('benefitFarms')}</p>
          </li>
          <li className='benefits-tile__item'>
            <p className='benefits-tile__benefit benefits-tile__benefit--quality'>{t('benefitQuality')}</p>
          </li>
          <li className='benefits-tile__item'>
            <p className='benefits-tile__benefit benefits-tile__benefit--delivery'>{t('benefitDelivery')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BenefitsTile;
