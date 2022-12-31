import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Header from './Header';
import { basicNavigation } from './utils';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  parameters: {
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
        </Routes>
      </MemoryRouter>
      {/* <RouterProvider router={router} /> */}
    </StoryContainer>
  );
};
