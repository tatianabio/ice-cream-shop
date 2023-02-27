import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import CatalogFilter from './CatalogFilter';

export default {
  title: 'Components/Molecules/CatalogFilter',
  component: CatalogFilter,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3641&t=2neZ8c4SDdudU7a7-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Catalog Filter'
      style={{ maxWidth: '1000px', minHeight: '1000px', height: 'min-content', padding: '15px' }}
    >
      <CatalogFilter data-testid='demo' />
    </StoryContainer>
  );
};
