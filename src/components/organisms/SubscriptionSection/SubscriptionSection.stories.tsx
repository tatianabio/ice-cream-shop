import React from 'react';
import SubscriptionSection from './SubscriptionSection';
import StoryContainer from '../../utils/StoryContainer';
import globalMswHandlers from '../../../mock/mswHandlers';
import GlobalMessage from '../../atoms/GlobalMessage';

export default {
  title: 'Components/Organisms/SubscriptionSection',
  component: SubscriptionSection,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8108%3A5845&t=92fzZeIxuIo2Kxvs-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Subscription Section'
      style={{ maxWidth: '600px', minHeight: '250px', height: 'min-content', padding: '15px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <SubscriptionSection data-testid='demo' />
      </>
    </StoryContainer>
  );
};
