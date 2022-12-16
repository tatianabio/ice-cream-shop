import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './Button.stories';

describe('Button Tests', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    render(<Demo onClickTest={onClick} />);
  });
  it.each(['primary', 'secondary', 'thirdly'])('Buttons render', (variant) => {
    expect(screen.getByTestId(`${variant}-default-button`)).toHaveTextContent('order');
    expect(screen.getByTestId(`${variant}-disabled-button`)).toHaveTextContent('order');
    expect(screen.getByTestId(`${variant}-loading-button`)).toHaveTextContent('order');
  });

  it.each(['primary', 'secondary', 'thirdly'])('Buttons action', async (variant) => {
    await userEvent.click(screen.getByTestId(`${variant}-default-button`));
    expect(onClick).toBeCalledTimes(1);
    await userEvent.click(screen.getByTestId(`${variant}-default-button`));
    expect(onClick).toBeCalledTimes(2);
    await userEvent.click(screen.getByTestId(`${variant}-disabled-button`));
    expect(onClick).toBeCalledTimes(2);
    await userEvent.click(screen.getByTestId(`${variant}-loading-button`));
    expect(onClick).toBeCalledTimes(2);
  });

  it('Buttons focus', async () => {
    await userEvent.keyboard('{Tab}');
    expect(screen.getByTestId('primary-default-button')).toHaveFocus();
    await userEvent.keyboard('{Tab}');
    expect(screen.getByTestId('secondary-default-button')).toHaveFocus();
    await userEvent.keyboard('{Tab}');
    expect(screen.getByTestId('thirdly-default-button')).toHaveFocus();
  });
});
