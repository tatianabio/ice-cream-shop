import React from 'react';
import './BulletPagination.scss';
import { useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';
import cx from 'classnames';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../SliderTile/SliderTile.store';

interface IBulletPagination {
  /** Technical attributes */
  'data-testid': string;
  className?: string;
}

const BulletPagination = ({ 'data-testid': testId, className }: IBulletPagination) => {
  const { t } = useTranslation();
  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);

  const bulletsList = offers.map((item, idx) => {
    const { id } = item;
    const isActive = idx === activeItemIndex;
    return (
      <li
        key={id}
        className={cx('bullet-item', isActive && 'bullet-item--active')}
        data-testid={`${testId}-bullet-item-${idx}`}
      >
        <span className='visually-hidden'>
          {`${t('iceCreamNo')} ${idx + 1}. ${isActive ? t('iceIsShown') : t('iceIsNotShown')}`}
        </span>
      </li>
    );
  });

  return (
    <ul className={cx('bullet-list', className)} data-testid={`${testId}-bullet-list`}>
      {bulletsList}
    </ul>
  );
};

export default BulletPagination;
