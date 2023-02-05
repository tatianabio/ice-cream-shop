import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StoryContainer from '../../storybookUtils/StoryContainer';
import globalMswHandlers from '../../../mock/mswHandlers';
import GlobalMessage from '../../atoms/GlobalMessage';
import Page from './Page';

export default {
  title: 'Components/Pages/Page',
  component: Page,
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
      title='Page'
      text='as for Main Page as an example (sticky footer does not work due to Storybook container)'
      style={{ maxWidth: '1400px', minHeight: '600px', height: 'min-content', padding: '10px' }}
      hasPinkBackground={false}
    >
      <>
        <GlobalMessage data-testid='demo' />

        <MemoryRouter initialEntries={['/main']}>
          <Routes>
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Page data-testid='demo'>
                  <p>Main Page content</p>
                </Page>
              }
              path='/main'
            />
          </Routes>
        </MemoryRouter>
      </>
    </StoryContainer>
  );
};
