import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './Input.stories';

describe('Inputs tests', () => {
  beforeEach(() => {
    render(<Demo />);
  });

  it('Inputs render', () => {
    // Default input
    expect(screen.getByTestId('input-default')).toBeInTheDocument();

    // Invalid input
    expect(screen.getByTestId('input-invalid')).toHaveClass('input--invalid');
    expect(screen.getByTestId('input-invalid')).toHaveValue('Invalid value');

    // Disabled input
    expect(screen.getByTestId('input-disabled')).toHaveAttribute('disabled');
    expect(screen.getByTestId('input-disabled')).toHaveValue('Disabled');
  });

  it('Inputs focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('input-default')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('input-invalid')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('input-disabled')).not.toHaveFocus();
  });

  it('Inputs onChange', async () => {
    const myInput = screen.getByTestId('input-default');
    await userEvent.type(myInput, '{t}{e}{s}{t}');
    expect(myInput).toHaveValue('test');
  });
});
