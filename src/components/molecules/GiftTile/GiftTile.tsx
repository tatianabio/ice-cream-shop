import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button';

const GiftTile = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t('')}</h3>
      <p>{t('')}</p>
      <img src='' alt='' />
      <Button data-testid='test' text={t('getGift')} variant='primary' />
    </div>
  );
};

export default GiftTile;
