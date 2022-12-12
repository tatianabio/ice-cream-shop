import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './Input.stories';

describe('Inputs tests', () => {
  beforeEach(() => {
    render(<Demo />);
  });

  it('Inputs render', () => {
    // Default input
    expect(screen.getByTestId('default-input')).toBeInTheDocument();

    // Invalid input
    expect(screen.getByTestId('invalid-input')).toHaveClass('input--invalid');
    expect(screen.getByTestId('invalid-input')).toHaveValue('Invalid value');

    // Disabled input
    expect(screen.getByTestId('disabled-input')).toHaveAttribute('disabled');
    expect(screen.getByTestId('disabled-input')).toHaveValue('Disabled');
  });

  it('Inputs focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('default-input')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('invalid-input')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('disabled-input')).not.toHaveFocus();
  });

  it('Inputs onChange', async () => {
    const myInput = screen.getByTestId('default-input');
    await userEvent.type(myInput, '{t}{e}{s}{t}');
    expect(myInput).toHaveValue('test');
  });
});
