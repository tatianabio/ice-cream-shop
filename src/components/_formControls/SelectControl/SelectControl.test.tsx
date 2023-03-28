import { render, screen } from '@testing-library/react';
import { Demo } from './SelectControl.stories';

describe('Select Control tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-form-field')).toBeInTheDocument();
  });
});
