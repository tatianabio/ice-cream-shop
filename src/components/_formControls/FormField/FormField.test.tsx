import { render, screen } from '@testing-library/react';
import { Demo } from './FormField.stories';

describe('FormFields Tests', () => {
  it('FormFields render', () => {
    render(<Demo />);
    // Fields render
    expect(screen.getByTestId('test-1-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('test-2-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('test-3-form-field')).toBeInTheDocument();

    // Labels render
    expect(screen.getByTestId('test-1-label')).toHaveClass('form-field__label--bold');
    expect(screen.getByTestId('test-2-label')).not.toHaveClass('form-field__label--bold');
    expect(screen.getByTestId('test-3-label')).toHaveClass('visually-hidden');

    // Tooltip(s) render
    expect(screen.getByTestId('test-1-wrapper')).toContainElement(screen.getByTestId('test-1-tooltip'));
    expect(screen.queryByTestId('test-2-tooltip')).toBeNull();
    expect(screen.queryByTestId('test-3-tooltip')).toBeNull();

    // Error messages render
    expect(screen.getByTestId('test-1-error-message')).toBeInTheDocument();
    expect(screen.getByTestId('test-2-error-message')).toBeInTheDocument();
    expect(screen.queryByTestId('test-3-error-message')).toBeNull();
  });
});
