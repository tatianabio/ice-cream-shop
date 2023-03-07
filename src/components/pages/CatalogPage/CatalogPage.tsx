import React from 'react';
import './CatalogPage.scss';
import { shallow } from 'zustand/shallow';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../../atoms/SliderTile/SliderTile.store';
import Page from '../Page';
import CatalogSection from '../../organisms/CatalogSection';
import Breadcrumbs from '../../atoms/Breadcrumbs';
import { breadcrumbsCatalog } from '../../atoms/Breadcrumbs/utils';

interface ICatalogPage {
  /** Technical attributes */
  'data-testid': string;
}

const CatalogPage = ({ 'data-testid': testId }: ICatalogPage) => {
  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);
  const { backgroundColor } = offers[activeItemIndex];

  return (
    <Page data-testid='app'>
      <main
        className='catalog-page'
        data-testid={`${testId}-catalog-page`}
        style={{ backgroundColor: `var(--special-${backgroundColor})` }}
      >
        <Breadcrumbs breadcrumbsArray={breadcrumbsCatalog} />
        <CatalogSection />
      </main>
    </Page>
  );
};

export default CatalogPage;
