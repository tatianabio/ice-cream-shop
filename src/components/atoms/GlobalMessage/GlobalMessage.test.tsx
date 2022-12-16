import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from './GlobalMessage';
import Button from '../Button';
import { sendMessageToDisplay } from './GlobalMessage.store';

const TestComponent = () => {
  const onClickHandlerSuccess = () => sendMessageToDisplay('successfulSubmission', 'success', 1000);
  const onClickHandlerError = () => sendMessageToDisplay('errorMessage', 'error', 1000);
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <Button data-testid='success' text='Show success message' variant='primary' onClick={onClickHandlerSuccess} />
      <Button data-testid='error' text='Show error message' variant='primary' onClick={onClickHandlerError} />
    </div>
  );
};

describe('Global Message Tests', () => {
  const myUserEvent = userEvent.setup({ delay: null });
  it('Global Message Success Render', async () => {
    render(<TestComponent />);
    // jest.useFakeTimers();
    await myUserEvent.click(screen.getByTestId('success-button'));
    expect(screen.getByTestId('demo-global-message')).toHaveClass('global-message__item--success');
    // jest.advanceTimersByTime(1000);
    // await waitForElementToBeRemoved(screen.getByTestId('demo-global-message'));
    // jest.advanceTimersByTime(1000);
    // jest.useRealTimers();
  });

  it('Global Message Error Render', async () => {
    render(<TestComponent />);
    await myUserEvent.click(screen.getByTestId('error-button'));
    expect(await screen.findByTestId('demo-global-message')).toHaveClass('global-message__item--error');
  });
});
