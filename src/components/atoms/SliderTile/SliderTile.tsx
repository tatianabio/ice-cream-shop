import React from 'react';
import './SliderTile.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import shallow from 'zustand/shallow';
import Chevron from '../../../assets/svg/chevron';
import { IStore, useSliderTileStore } from './SliderTile.store';

interface ISliderTile {
  /** Technical attributes */
  'data-testid': string;
}

const SliderTile = ({ 'data-testid': testId }: ISliderTile) => {
  const { t } = useTranslation();
  const [active, setActive] = useSliderTileStore((store: IStore) => [store.active, store.setActive], shallow);
  const themes = useSliderTileStore((store: IStore) => store.themes, shallow);

  const themesList = themes.map((item, idx) => {
    const { imgLink, title, id } = item;
    const isActive = idx === active;
    const order = idx < active ? idx + themes.length - active : idx - active;
    const isHidden = order > 2;

    const onClickHandler = (direction: 1 | -1) => {
      let current = active + direction;
      current === themes.length && (current = 0);
      current < 0 && (current = themes.length - 1);
      setActive(current);
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
    <div>
      <ul className='ice-cream-list' data-testid={`${testId}-list`}>
        {themesList}
      </ul>
    </div>
  );
};

export default SliderTile;
