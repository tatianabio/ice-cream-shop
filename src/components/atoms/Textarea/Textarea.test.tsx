import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './Textarea.stories';

describe('Textarea Tests', () => {
  beforeEach(() => render(<Demo />));

  it('Textarea render and styles', () => {
    // Default textarea
    expect(screen.getByTestId('default-textarea')).toBeInTheDocument();

    // Invalid textarea
    expect(screen.getByTestId('invalid-textarea')).toHaveValue('Invalid value');
    expect(screen.getByTestId('invalid-textarea')).toHaveClass('textarea--invalid');

    // Disabled textarea
    expect(screen.getByTestId('disabled-textarea')).toHaveValue('Disabled');
    expect(screen.getByTestId('disabled-textarea')).toHaveAttribute('disabled');
  });

  it('Textarea focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('default-textarea')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('invalid-textarea')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('disabled-textarea')).not.toHaveFocus();
  });

  it('Textarea onChange', async () => {
    const defaultTextarea = screen.getByTestId('default-textarea');
    await userEvent.type(defaultTextarea, '{t}{e}{s}{t}');
    expect(defaultTextarea).toHaveValue('test');
  });
});
