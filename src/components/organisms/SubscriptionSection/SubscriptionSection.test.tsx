import React from 'react';
import { render, screen } from '@testing-library/react';
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
  it('render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-subscription')).toBeInTheDocument();
  });
});
