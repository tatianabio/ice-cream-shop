import React from 'react';
import './SliderTile.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

interface ISliderTile {
  /** The array including the list of ice cream themes */
  themes: IIceCreamTheme[];
}

const SliderTile = ({ themes }: ISliderTile) => {
  const { t } = useTranslation();
  const themesList = themes.map((item) => {
    const { imgLink, title, id } = item;
    return (
      <li className='ice-cream-item' key={id}>
        <img className='ice-cream-item__img' src={imgLink} alt={`${t(title)}`} width='306 px' height='507 px' />
      </li>
    );
  });

  return (
    <div>
      <button className={cx('slider-button', 'slider-button--previous')} type='button'>
        <span>{t('showPrevious')}</span>
      </button>
      <button className={cx('slider-button', 'slider-button--next')} type='button'>
        <span>{t('showNext')}</span>
      </button>
      <ul className='ice-cream-list'>{themesList}</ul>
    </div>
  );
};

export default SliderTile;
