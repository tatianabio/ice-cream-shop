import React from 'react';
import './SliderTile.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { shallow } from 'zustand/shallow';
import Chevron from '../../../assets/svg/chevron';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from './SliderTile.store';

interface ISliderTile {
  /** Technical attributes */
  'data-testid': string;
  className?: string;
}

const SliderTile = ({ 'data-testid': testId, className }: ISliderTile) => {
  const { t } = useTranslation();
  const { activeItemIndex, setActiveItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);

  const themesList = offers.map((item, idx) => {
    const { imgLink, title, id } = item;
    const isActive = idx === activeItemIndex;
    const order = idx < activeItemIndex ? idx + offers.length - activeItemIndex : idx - activeItemIndex;
    const isHidden = order > 2;

    const onClickHandler = (direction: 1 | -1) => {
      let current = activeItemIndex + direction;
      current === offers.length && (current = 0);
      current < 0 && (current = offers.length - 1);
      setActiveItemIndex(current);
    };

    return (
      <li
        className={cx('ice-cream-item', isActive && 'ice-cream-item--active', isHidden && 'ice-cream-item--hidden')}
        style={{ order }}
        key={id}
        data-testid={`${testId}-item-${id}`}
      >
        <button
          className={cx('slider-button', 'slider-button--previous', isActive && 'slider-button--active')}
          type='button'
          onClick={() => onClickHandler(-1)}
          data-testid={`${testId}-previous-button-${id}`}
        >
          <span className='visually-hidden'>{t('showPrevious')}</span>
          <Chevron />
        </button>
        <button
          className={cx('slider-button', 'slider-button--next', isActive && 'slider-button--active')}
          type='button'
          onClick={() => onClickHandler(1)}
          data-testid={`${testId}-next-button-${id}`}
        >
          <span className='visually-hidden'>{t('showNext')}</span>
          <Chevron />
        </button>
        <img
          className='ice-cream-item__img'
          src={imgLink}
          alt={`${t(title)}`}
          width='306 px'
          height='507 px'
          data-testid={`${testId}-img-${id}`}
        />
      </li>
    );
  });
  return (
    <ul className={cx('ice-cream-list', className)} data-testid={`${testId}-list`}>
      {themesList}
    </ul>
  );
};

export default SliderTile;
