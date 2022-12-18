import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from './Tooltip';

describe('Tooltip tests', () => {
  it('render', async () => {
    render(<Tooltip data-testid='demo' text='Tooltip text' />);
    const myToggle = screen.getByTestId('demo-toggle');
    expect(screen.getByTestId('demo-tooltip')).toBeInTheDocument();
    expect(myToggle).toBeInTheDocument();
    await userEvent.hover(myToggle);
    expect(screen.getByTestId('demo-tooltip-text')).toBeInTheDocument();
    await userEvent.unhover(myToggle);
    expect(screen.queryByTestId('demo-tooltip-text')).toBeNull();
  });

  it('focus', async () => {
    render(<Tooltip data-testid='demo' text='Tooltip text' />);
    const myToggle = screen.getByTestId('demo-toggle');
    await userEvent.tab();
    expect(myToggle).toHaveFocus();
    expect(screen.getByTestId('demo-tooltip-text')).toBeInTheDocument();
    await userEvent.tab();
    expect(screen.queryByTestId('demo-tooltip-text')).toBeNull();
  });
});
