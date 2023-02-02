import React from 'react';
import globalMswHandlers from '../../../mock/mswHandlers';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage from '../../atoms/GlobalMessage';
import CatalogList from './CatalogList';
import { products } from '../../../mock/data/products';

export default {
  title: 'Components/Molecules/CatalogList',
  component: CatalogList,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8108%3A4135&t=rIxPhdSCPwbBF3el-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Catalog List'
      style={{ maxWidth: '1200px', minHeight: '700px', height: 'min-content', padding: '10px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <CatalogList data-testid='demo' displayedProductsNumber={4} productsList={products} />
      </>
    </StoryContainer>
  );
};
