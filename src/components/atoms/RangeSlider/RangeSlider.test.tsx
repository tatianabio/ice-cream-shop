import { render, screen } from '@testing-library/react';
import { Demo } from './RangeSlider.stories';

describe('RangeSlider tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-range-slider')).toBeInTheDocument();
  });
});
