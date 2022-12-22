import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import FeedbackCanvass from './FeedbackCanvass';
import {
  postRequestWithoutDelayError,
  postRequestWithoutDelaySuccess,
} from '../../../mock/mswHandlers/postRequest/postRequest';
import mswServer from '../../../mock/mswServer/mswServer';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <FeedbackCanvass data-testid='demo' />
    </div>
  );
};

const myInputName = () => screen.getByTestId('demo-name-input');
const myInputEmail = () => screen.getByTestId('demo-email-input');
const myTextarea = () => screen.getByTestId('demo-textarea');
const myButton = () => screen.getByTestId('demo-button');

describe('Feedback Canvass Tests', () => {
  it('render and validation', async () => {
    render(<TestComponent />);
    const myErrorMessage = screen.getByTestId('demo-error-message');
    // Subscription section render
    expect(screen.getByTestId('demo-feedback-canvass')).toBeInTheDocument();

    // Unsuccessful validation of the form
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(myErrorMessage).toHaveTextContent('requiredField');
    });
  });

  it('Successful submission', async () => {
    render(<TestComponent />);
    await userEvent.type(myInputName(), 'James Scott');
    await userEvent.type(myInputEmail(), 'test@gmail.com');
    await userEvent.type(myTextarea(), 'Everything was fine.');
    mswServer.use(postRequestWithoutDelaySuccess);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--success');
    });
  });

  it('Unsuccessful submission', async () => {
    render(<TestComponent />);
    await userEvent.type(myInputName(), 'James Scott');
    await userEvent.type(myInputEmail(), 'test@gmail.com');
    await userEvent.type(myTextarea(), 'Everything was fine.');
    mswServer.use(postRequestWithoutDelayError);
    await userEvent.click(myButton());
    await waitFor(() => {
      expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--error');
    });
  });
});
