import React from 'react';
import globalMswHandlers from '../../../mock/mswHandlers';
import FeedbackTile from './FeedbackTile';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage from '../../atoms/GlobalMessage';

export default {
  title: 'Components/Molecules/FeedbackTile',
  component: FeedbackTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=54%3A650&t=JrnOwXxnXDGok90J-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Feedback form'
      style={{ maxWidth: '600px', minHeight: '250px', height: 'min-content', padding: '40px' }}
      hasPinkBackground={false}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <FeedbackTile data-testid='demo' />
      </>
    </StoryContainer>
  );
};
