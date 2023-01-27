import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Header from './Header';
import basicNavigation from './utils';
import globalMswHandlers from '../../../mock/mswHandlers';
import GlobalMessage from '../../atoms/GlobalMessage';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=576%3A1258&t=wHA2SrckQso94FR8-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Header'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <MemoryRouter initialEntries={['/catalog']}>
          <Routes>
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='main-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='main' />
                  Main page
                </div>
              }
              path='/main'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='catalog-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='catalog' />
                  Catalog page
                </div>
              }
              path='/catalog'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='shipping-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='shipping' />
                  Shipping page
                </div>
              }
              path='/shipping'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='about-us-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='aboutUs' />
                  About us
                </div>
              }
              path='/aboutUs'
            />
          </Routes>
        </MemoryRouter>
      </>
    </StoryContainer>
  );
};
