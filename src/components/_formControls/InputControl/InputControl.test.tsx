import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './InputControl.stories';

describe('Input Control Tests', () => {
  it('Input Control render', () => {
    render(<Demo />);

    // Input Control render
    expect(screen.getByTestId('demo-1-input')).toBeInTheDocument();
    expect(screen.getByTestId('demo-1-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('demo-2-input')).toBeInTheDocument();
    expect(screen.getByTestId('demo-2-form-field')).toBeInTheDocument();

    // Connection between labels and inputs
    expect(screen.getByTestId('demo-1-input')).toHaveAttribute('id', 'inputName1-field');
    expect(screen.getByTestId('demo-1-label')).toHaveAttribute('for', 'inputName1-field');
    expect(screen.getByTestId('demo-2-input')).toHaveAttribute('id', 'inputName2-field');
    expect(screen.getByTestId('demo-2-label')).toHaveAttribute('for', 'inputName2-field');
  });

  it('Input Control errors', async () => {
    render(<Demo />);
    await userEvent.clear(screen.getByTestId('demo-1-input'));
    await waitFor(() => {
      expect(screen.getByTestId('demo-1-error-message')).toHaveTextContent('requiredField');
    });
  });
});
