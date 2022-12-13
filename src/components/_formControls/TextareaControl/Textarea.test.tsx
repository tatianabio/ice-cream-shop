import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './TextareaControl.stories';

describe('Textarea Tests', () => {
  beforeEach(() => render(<Demo />));

  it('Textarea render', () => {
    // Input Control render
    expect(screen.getByTestId('demo-1-textarea')).toHaveValue('Default Value 1');
    expect(screen.getByTestId('demo-1-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('demo-2-textarea')).toHaveValue('Default Value 2');
    expect(screen.getByTestId('demo-2-form-field')).toBeInTheDocument();

    // Connection between labels and inputs
    expect(screen.getByTestId('demo-1-textarea')).toHaveAttribute('id', 'textareaName1-field');
    expect(screen.getByTestId('demo-1-label')).toHaveAttribute('for', 'textareaName1-field');
    expect(screen.getByTestId('demo-2-textarea')).toHaveAttribute('id', 'textareaName2-field');
    expect(screen.getByTestId('demo-2-label')).toHaveAttribute('for', 'textareaName2-field');
  });

  it('Textarea Control errors', async () => {
    await userEvent.clear(screen.getByTestId('demo-1-textarea'));
    await waitFor(() => {
      expect(screen.getByTestId('demo-1-error-message')).toHaveTextContent('This field is required.');
    });
  });
});
