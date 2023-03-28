import { render, screen } from '@testing-library/react';
import { Demo } from './Select.stories';

describe('Select tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-select')).toBeInTheDocument();
  });
});
