import React, { ReactElement } from 'react';
import './Page.scss';
import { shallow } from 'zustand/shallow';
import Header from '../../organisms/Header';
import basicNavigation from '../../organisms/Header/utils';
import Footer from '../../organisms/Footer';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../../atoms/SliderTile/SliderTile.store';

interface IPage {
  /** Content of the page */
  children: ReactElement;
  /** Technical attributes */
  'data-testid': string;
}

const Page = ({ 'data-testid': testId, children }: IPage) => {
  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const { backgroundColor } = offers[activeItemIndex];

  return (
    <div
      className='page-container'
      style={{ backgroundColor: `var(--special-${backgroundColor})` }}
      data-testid={`${testId}-page-container`}
    >
      <Header basicNavigationArray={basicNavigation} data-testid={testId} />
      {children}
      <Footer data-testid={testId} />
    </div>
  );
};

export default Page;
