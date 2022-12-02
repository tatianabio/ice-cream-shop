import React from 'react';

interface IIceCreamTheme {
  /** The short description of the ice cream of the theme */
  title: string;
  /** The link to the representative image of the ice cream of the theme */
  imgLink: string;
  /** The detailed description of the ice cream of the theme */
  description: string;
  /** The color of the page's background stated by the theme */
  backgroundColor: string;
}

interface ISliderTile {
  /** The array including the list of ice cream themes */
  iceCreamThemes: IIceCreamTheme[];
}

const SliderTile = ({ iceCreamThemes }: ISliderTile) => {
  const themesList = iceCreamThemes.map((item) => {
    const { imgLink, title } = item;
    return (
      <li>
        <img src={imgLink} alt={title} />
      </li>
    );
  });

  return <ol>{themesList}</ol>;
};

export default SliderTile;
