import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import SubscriptionSection from './SubscriptionSection';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <SubscriptionSection data-testid='demo' />
    </div>
  );
};

describe('Subscription Section Tests', () => {
  it('render', async () => {
    render(<TestComponent />);

    // Tested elements
    const myInput = screen.getByTestId('demo-input');
    const myButton = screen.getByTestId('demo-button');
    const myErrorMessage = screen.getByTestId('demo-error-message');

    // Subscription section render
    expect(screen.getByTestId('demo-subscription')).toBeInTheDocument();

    // Unsuccessful validation of the form
    await userEvent.click(myButton);
    await waitFor(() => {
      expect(myErrorMessage).toHaveTextContent('requiredField');
    });
    await userEvent.type(myInput, '{t}{e}{s}{t}');
    await userEvent.click(myButton);
    await waitFor(() => {
      expect(myErrorMessage).toHaveTextContent('incorrectEmail');
    });

    // Successful submission of the form
    await userEvent.clear(myInput);
    await userEvent.type(myInput, '{t}{e}{s}{t}{@}{e}{m}{a}{i}{l}{.}{c}{o}{m}');
    await userEvent.click(myButton);
    // await waitFor(async () => {
    //   expect(await screen.findByTestId('demo-global-message')).toHaveClass('global-message__item');
    // });
  });
});
