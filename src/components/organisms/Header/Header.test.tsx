import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GlobalMessage from '../../atoms/GlobalMessage';
import Header from './Header';
import basicNavigation from './utils';

describe('Header tests', () => {
  const TestComponent = () => {
    return (
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
    );
  };

  it('Header render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('catalog-test')).toBeInTheDocument();
  });
});
