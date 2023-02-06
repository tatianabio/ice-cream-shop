import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import GlobalMessage from '../../atoms/GlobalMessage';
import MainPage from './MainPage';

const TestComponent = () => {
  return (
    <>
      <GlobalMessage data-testid='demo' />

      <MemoryRouter initialEntries={['/main']}>
        <Routes>
          <Route
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <MainPage data-testid='demo' />
            }
            path='/main'
          />
        </Routes>
      </MemoryRouter>
    </>
  );
};

describe('Main Page Tests', () => {
  it('render', async () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-main-page')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('main-page-offer-block-0-button'));
  });
});
