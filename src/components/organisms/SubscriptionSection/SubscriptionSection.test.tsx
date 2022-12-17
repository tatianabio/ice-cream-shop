import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import SubscriptionSection from './SubscriptionSection';
import mswServer from '../../../mock/mswServer/mswServer';
import {
  postRequestWithoutDelayError,
  postRequestWithoutDelaySuccess,
} from '../../../mock/mswHandlers/postRequest/postRequest';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <SubscriptionSection data-testid='demo' />
    </div>
  );
};

const myInput = () => screen.getByTestId('demo-input');
const myButton = () => screen.getByTestId('demo-button');

describe('Subscription Section Tests', () => {
  it('render and validation', async () => {
    render(<TestComponent />);
    const myErrorMessage = screen.getByTestId('demo-error-message');
    // Subscription section render
    expect(screen.getByTestId('demo-subscription')).toBeInTheDocument();

    // Unsuccessful validation of the form
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(myErrorMessage).toHaveTextContent('requiredField');
    });
    await userEvent.type(myInput(), 'test');
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(myErrorMessage).toHaveTextContent('incorrectEmail');
    });
  });

  it('Successful submission', async () => {
    render(<TestComponent />);
    await userEvent.clear(myInput());
    await userEvent.type(myInput(), 'test@gmail.com');
    mswServer.use(postRequestWithoutDelaySuccess);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--success');
    });
  });

  it('Unsuccessful submission', async () => {
    render(<TestComponent />);
    await userEvent.type(myInput(), 'test@gmail.com');
    mswServer.use(postRequestWithoutDelayError);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--error');
    });
  });
});
