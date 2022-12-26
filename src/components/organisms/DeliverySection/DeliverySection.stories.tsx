import React from 'react';
import globalMswHandlers from '../../../mock/mswHandlers';
import DeliverySection from './DeliverySection';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage from '../../atoms/GlobalMessage';

export default {
  title: 'Components/Organisms/DeliverySection',
  component: DeliverySection,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8108%3A5913&t=qmdMHAtwc2JB0VHI-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Delivery Section'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <DeliverySection data-testid='demo' />
      </>
    </StoryContainer>
  );
};
