import React from 'react';
import './GiftTile.scss';
import { useTranslation } from 'react-i18next';
import { IGift } from '../../../mock/data/gifts';
import ButtonLink from '../../atoms/ButtonLink';

interface IGiftTile {
  /** Data of the gift: id, name, description, imgLink, link */
  data: IGift;
  /** Technical attributes */
  'data-testid': string;
}

const GiftTile = ({ data, 'data-testid': testId }: IGiftTile) => {
  const { name, description, imgLink, link } = data;
  const { t } = useTranslation();
  return (
    <div className='gift-tile'>
      <div className='gift-tile__info-wrapper'>
        <h3 className='gift-tile__title'>{t(name)}</h3>
        <p className='gift-tile__description'>{t(description)}</p>
        <ButtonLink
          text={t('readGiftDetails')}
          variant='primary'
          className='gift-tile__more-details-button'
          data-testid={`${testId}-button`}
          link={link}
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
