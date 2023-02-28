import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import CatalogSection from './CatalogSection';
import globalMswHandlers from '../../../mock/mswHandlers';

export default {
  title: 'Components/Organisms/CatalogSection',
  component: CatalogSection,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3610&t=r6EEADoiwsxfzRVl-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Catalog Section'
      style={{ maxWidth: '1400px', minHeight: '1800px', height: 'min-content', padding: '15px' }}
    >
      <CatalogSection />
    </StoryContainer>
  );
};
