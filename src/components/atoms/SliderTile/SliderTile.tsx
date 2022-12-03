import React, { useState } from 'react';
import './SliderTile.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { IIceCreamTheme } from '../../../mock/data/iceCreamThemes';
import Chevron from '../../../assets/svg/chevron';

interface ISliderTile {
  /** The array including the list of ice cream themes */
  themes: IIceCreamTheme[];
}

const SliderTile = ({ themes }: ISliderTile) => {
  const { t } = useTranslation();

  const [active, setActive] = useState(0);

  const themesList = themes.map((item, idx) => {
    const { imgLink, title, id } = item;
    const isActive = idx === active;
    return (
      <li className={cx('ice-cream-item', isActive && 'ice-cream-item--active')} key={id}>
        <button
          className={cx('slider-button', 'slider-button--previous', isActive && 'slider-button--active')}
          type='button'
        >
          <span className='visually-hidden'>{t('showPrevious')}</span>
          <Chevron />
        </button>
        <button
          className={cx('slider-button', 'slider-button--next', isActive && 'slider-button--active')}
          type='button'
        >
          <span className='visually-hidden'>{t('showNext')}</span>
          <Chevron />
        </button>
        <img className='ice-cream-item__img' src={imgLink} alt={`${t(title)}`} width='306 px' height='507 px' />
      </li>
    );
  });

  return (
    <div>
      <ul className='ice-cream-list'>{themesList}</ul>
    </div>
  );
};

export default SliderTile;
