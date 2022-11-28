import React from 'react';
import './GiftTile.scss';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button';
import { IGift } from '../../../mock/data/gifts';

interface IGiftTile {
  /** Data of the gift: id, name, description, imgLink, link */
  data: IGift;
  /** Technical attributes */
  'data-testid': string;
}

const GiftTile = ({ data, 'data-testid': testId }: IGiftTile) => {
  const { name, description, imgLink, link } = data;
  const onClickHandler = () => window.open(link, '_blank');
  const { t } = useTranslation();
  return (
    <div className='gift-tile'>
      <div className='gift-tile__info-wrapper'>
        <h3 className='gift-tile__title'>{t(name)}</h3>
        <p className='gift-tile__description'>{t(description)}</p>
        <Button
          className='gift-tile__more-details-button'
          onClick={onClickHandler}
          data-testid={`${testId}-button`}
          text={t('readGiftDetails')}
          variant='primary'
        />
      </div>
      <img
        className='gift-tile__img'
        src={imgLink}
        alt={`${t('giftIllustration')} ${t(name)}`}
        width='219 px'
        height='268 px'
      />
    </div>
  );
};

export default GiftTile;
