import React, { useEffect } from 'react';
import './CatalogSection.scss';
import { shallow } from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import CatalogFilter from '../../molecules/CatalogFilter';
import CatalogList from '../../molecules/CatalogList';
import useCatalogFilterStore, { ICatalogFilterStore } from '../../molecules/CatalogFilter/CatalogFilter.store';

const CatalogSection = () => {
  const { t } = useTranslation();
  const loadProducts = useCatalogFilterStore((store) => store.loadProducts, shallow);
  const filteredProductList = useCatalogFilterStore((store: ICatalogFilterStore) => store.filteredProductList, shallow);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className='catalog-section'>
      <h2 className='catalog-section__title'>{t('iceCreamCatalogTitle')}</h2>
      <CatalogFilter data-testid='test' />
      {filteredProductList.length ? (
        <CatalogList data-testid='test' displayedProductsNumber={20} productsList={filteredProductList} />
      ) : (
        <p className='catalog-section__strict-filters-notice'>{t('strictFilters')}</p>
      )}
    </section>
  );
};

export default CatalogSection;
