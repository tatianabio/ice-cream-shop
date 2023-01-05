import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import {
  postRequestWithoutDelayError,
  postRequestWithoutDelaySuccess,
} from '../../../mock/mswHandlers/postRequest/postRequest';
import mswServer from '../../../mock/mswServer/mswServer';
import SignInTile from './SignInTile';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <SignInTile data-testid='demo' />
    </div>
  );
};

const myButton = () => screen.getByTestId('demo-button');

describe('Sign In Tile Tests', () => {
  it('render and validation', async () => {
    render(<TestComponent />);

    // Sign In Tile render
    expect(screen.getByTestId('demo-sign-in')).toBeInTheDocument();
  });

  it('Successful submission', async () => {
    render(<TestComponent />);
    mswServer.use(postRequestWithoutDelaySuccess);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--success');
    });
  });

  it('Unsuccessful submission', async () => {
    render(<TestComponent />);
    mswServer.use(postRequestWithoutDelayError);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--error');
    });
  });
});
