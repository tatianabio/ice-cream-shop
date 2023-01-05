import React from 'react';
import globalMswHandlers from '../../../mock/mswHandlers';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage from '../../atoms/GlobalMessage';
import SignInTile from './SignInTile';

export default {
  title: 'Components/Molecules/SignInTile',
  component: SignInTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8019%3A3345&t=tuUscdwv8NJYEpZI-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Sign In form'
      style={{ maxWidth: '600px', minHeight: '250px', height: 'min-content', padding: '40px' }}
      hasPinkBackground={false}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <SignInTile data-testid='demo' />
      </>
    </StoryContainer>
  );
};
