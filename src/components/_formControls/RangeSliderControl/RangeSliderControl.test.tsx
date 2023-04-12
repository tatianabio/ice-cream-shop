import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './RangeSliderControl.stories';

describe('RangeSliderControl tests', () => {
  it('render', async () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('demo-label')).toHaveTextContent('4');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await act(async () => {
      await userEvent.click(screen.getByTestId('demo-button'));
    });
    expect(screen.getByTestId('demo-label')).toHaveTextContent('5');
  });
});
