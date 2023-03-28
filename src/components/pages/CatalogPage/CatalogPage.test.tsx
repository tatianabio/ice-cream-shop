import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GlobalMessage from '../../atoms/GlobalMessage';
import CatalogPage from './CatalogPage';

const TestComponent = () => {
  return (
    <>
      <GlobalMessage data-testid='demo' />

      <MemoryRouter initialEntries={['/catalog']}>
        <Routes>
          <Route
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <CatalogPage data-testid='demo' />
            }
            path='/catalog'
          />
        </Routes>
      </MemoryRouter>
    </>
  );
};

describe('Catalog Page Tests', () => {
  it('render', async () => {
    await act(() => {
      render(<TestComponent />);
    });

    expect(screen.getByTestId('demo-catalog-page')).toBeInTheDocument();
  });
});
