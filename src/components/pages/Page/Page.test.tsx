import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GlobalMessage from '../../atoms/GlobalMessage';
import Page from './Page';

const TestComponent = () => {
  return (
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
  );
};

describe('Page Tests', () => {
  it('render', async () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-page-container')).toBeInTheDocument();
  });
});
