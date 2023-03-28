import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './RangeSlider.stories';

describe('RangeSlider tests', () => {
  it('render', async () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-range-slider')).toBeInTheDocument();
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
  });
});
