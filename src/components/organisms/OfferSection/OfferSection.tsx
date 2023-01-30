import React from 'react';
import './OfferSection.scss';
import { useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';
import cx from 'classnames';
import OfferTile from '../../atoms/OfferTile';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../../atoms/SliderTile/SliderTile.store';
import { IIceCreamOffer } from '../../../mock/data/iceCreamOffers';
import SliderTile from '../../atoms/SliderTile';
import BulletPagination from '../../atoms/BulletPagination';
import SocialMedia from '../../molecules/SocialMedia';

interface IOfferSection {
  /** OnClick OrderButton Handler */
  addToCart: (offer: IIceCreamOffer) => void;
  /** Technical attributes */
  'data-testid': string;
}

const OfferSection = ({ 'data-testid': testId, addToCart }: IOfferSection) => {
  const { t } = useTranslation();

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const cartButtonOnClick = () => addToCart(offers[activeItemIndex]);

  const { backgroundColor } = offers[activeItemIndex];

  return (
    <section
      className={cx('offer-section', `special-color-${backgroundColor}`)}
      data-testid={`${testId}-offer-section`}
      style={{ backgroundColor: `var(--special-${backgroundColor})` }}
    >
      <h2 className='visually-hidden'>{t('offerSectionTitle')}</h2>
      <OfferTile className='offer-section__offer-tile' addToCart={cartButtonOnClick} data-testid={testId} />
      <SliderTile className='offer-section__slide-tile' data-testid={testId} />
      <BulletPagination className='offer-section__bullet-pagination' data-testid={testId} />
      <SocialMedia className='offer-section__social-media' />
    </section>
  );
};

export default OfferSection;
