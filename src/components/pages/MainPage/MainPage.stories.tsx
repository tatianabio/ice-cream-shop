import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import globalMswHandlers from '../../../mock/mswHandlers';
import GlobalMessage from '../../atoms/GlobalMessage';
import MainPage from './MainPage';

export default {
  title: 'Components/Pages/MainPage',
  component: MainPage,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=47%3A0&t=2QZn8OUXTH1QPWKt-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Main Page'
      style={{ maxWidth: '1190px', minHeight: '600px', height: 'min-content', padding: '10px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <MainPage data-testid='demo' />
      </>
    </StoryContainer>
  );
};
