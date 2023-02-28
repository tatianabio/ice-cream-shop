import React from 'react';
import './CatalogSection.scss';
import { shallow } from 'zustand/shallow';
import CatalogFilter from '../../molecules/CatalogFilter';
import CatalogList from '../../molecules/CatalogList';
import useCatalogFilterStore, { ICatalogFilterStore } from '../../molecules/CatalogFilter/CatalogFilter.store';

const CatalogSection = () => {
  const filteredProductList = useCatalogFilterStore((store: ICatalogFilterStore) => store.filteredProductList, shallow);
  return (
    <section className='catalog-section'>
      <h2>Ice cream</h2>
      <CatalogFilter data-testid='test' />
      <CatalogList data-testid='test' displayedProductsNumber={20} productsList={filteredProductList} />
    </section>
  );
};

export default CatalogSection;
