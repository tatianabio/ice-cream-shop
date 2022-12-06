import React from 'react';
import './OfferTile.scss';
import { useTranslation } from 'react-i18next';
import shallow from 'zustand/shallow';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../SliderTile/SliderTile.store';
import Button from '../Button';
import { IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

interface IOfferTile {
  /** OnClick OrderButton Handler */
  addToCart: (theme: IIceCreamTheme) => void;
  /** Technical attributes */
  'data-testid': string;
}

const OfferTile = ({ 'data-testid': testId, addToCart }: IOfferTile) => {
  const { t } = useTranslation();

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const themes = useSliderTileStore((store: ISliderTileStore) => store.themes, shallow);
  const cartButtonOnClick = () => addToCart(themes[activeItemIndex]);

  const { title, description } = themes[activeItemIndex];

  return (
    <div className='offer-block' data-testid={`${testId}-offer-block-${activeItemIndex}`}>
      <h3 className='offer-block__title'>{t(title)}</h3>
      <p className='offer-block__description'>{t(description)}</p>
      <Button
        className='offer-block__order-button'
        data-testid={`${testId}-offer-block-button-${activeItemIndex}`}
        text={t('order')}
        variant='primary'
        onClick={cartButtonOnClick}
      />
    </div>
  );
};

export default OfferTile;
