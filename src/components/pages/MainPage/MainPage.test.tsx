import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import MainPage from './MainPage';

const TestComponent = () => {
  return (
    <>
      <GlobalMessage data-testid='demo' />
      <MainPage data-testid='demo' />
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
