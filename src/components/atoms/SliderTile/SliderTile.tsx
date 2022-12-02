import React from 'react';
import { useTranslation } from 'react-i18next';
import { IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

interface ISliderTile {
  /** The array including the list of ice cream themes */
  iceCreamThemes: IIceCreamTheme[];
}

const SliderTile = ({ iceCreamThemes }: ISliderTile) => {
  const { t } = useTranslation();
  const themesList = iceCreamThemes.map((item) => {
    const { imgLink, title } = item;
    return (
      <li>
        <img src={imgLink} alt={`${t(title)}`} />
      </li>
    );
  });

  return <ol>{themesList}</ol>;
};

export default SliderTile;
