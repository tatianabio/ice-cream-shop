import { render, screen } from '@testing-library/react';
import { Demo } from './RangeSliderControl.stories';

describe('RangeSliderControl tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-form-field')).toBeInTheDocument();
  });
});
