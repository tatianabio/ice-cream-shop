import React from 'react';
import './OfferTile.scss';
import { useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';
import cx from 'classnames';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../SliderTile/SliderTile.store';
import Button from '../Button';
import { IIceCreamOffer } from '../../../mock/data/iceCreamOffers';

interface IOfferTile {
  /** OnClick OrderButton Handler */
  addToCart: (offer: IIceCreamOffer) => void;
  /** Technical attributes */
  className?: string;
  'data-testid': string;
}

const OfferTile = ({ 'data-testid': testId, addToCart, className }: IOfferTile) => {
  const { t } = useTranslation();

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const cartButtonOnClick = () => addToCart(offers[activeItemIndex]);

  const { title, description } = offers[activeItemIndex];

  return (
    <div className={cx('offer-block', className)} data-testid={`${testId}-offer-block-${activeItemIndex}`}>
      <h3 className='offer-block__title'>{t(title)}</h3>
      <p className='offer-block__description'>{t(description)}</p>
      <Button
        className='offer-block__order-button'
        data-testid={`${testId}-offer-block-${activeItemIndex}`}
        text={t('order')}
        variant='primary'
        onClick={cartButtonOnClick}
      />
    </div>
  );
};

export default OfferTile;
