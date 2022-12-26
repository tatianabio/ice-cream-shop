import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GlobalMessage from '../../atoms/GlobalMessage';
import DeliverySection from './DeliverySection';
import mswServer from '../../../mock/mswServer/mswServer';
import {
  postRequestWithoutDelayError,
  postRequestWithoutDelaySuccess,
} from '../../../mock/mswHandlers/postRequest/postRequest';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <DeliverySection data-testid='demo' />
    </div>
  );
};

describe('Delivery Section Tests', () => {
  it('render and successful submission', async () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-delivery-section')).toBeInTheDocument();
    await userEvent.type(screen.getByTestId('demo-date-input'), '01.04.2020');
    await userEvent.type(screen.getByTestId('demo-phone-input'), '+1111111111');
    await userEvent.type(screen.getByTestId('demo-address-input'), 'test address');
    mswServer.use(postRequestWithoutDelaySuccess);
    await userEvent.click(screen.getByTestId('demo-button'));
    expect(await screen.findByTestId('demo-global-message')).toHaveClass('global-message__item--success');
  });

  it('unsuccessful submission', async () => {
    render(<TestComponent />);
    await userEvent.type(screen.getByTestId('demo-date-input'), '01.04.2020');
    await userEvent.type(screen.getByTestId('demo-phone-input'), '+1111111111');
    await userEvent.type(screen.getByTestId('demo-address-input'), 'test address');
    mswServer.use(postRequestWithoutDelayError);
    await userEvent.click(screen.getByTestId('demo-button'));
    expect(await screen.findByTestId('demo-global-message')).toHaveClass('global-message__item--error');
  });
});
