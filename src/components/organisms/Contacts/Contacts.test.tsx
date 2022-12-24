import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalMessage from '../../atoms/GlobalMessage';
import Contacts from './Contacts';

const TestComponent = () => {
  return (
    <div>
      <GlobalMessage data-testid='demo' />
      <Contacts data-testid='demo' />
    </div>
  );
};

describe('Contacts Tests', () => {
  it('render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-contacts')).toBeInTheDocument();
  });
});
