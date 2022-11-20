import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './Button.stories';

describe('Button Tests', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    render(<Demo onClickTest={onClick} />);
  });
  it.each(['primary', 'secondary', 'thirdly'])('Buttons render', (variant) => {
    expect(screen.getByTestId(`${variant}-button-default`)).toBeInTheDocument();
    expect(screen.getByTestId(`${variant}-button-disabled`)).toBeInTheDocument();
    expect(screen.getByTestId(`${variant}-button-loading`)).toBeInTheDocument();
  });

  it.each(['primary', 'secondary', 'thirdly'])('Buttons action', async (variant) => {
    await userEvent.click(screen.getByTestId(`${variant}-button-default`));
    expect(onClick).toBeCalledTimes(1);
    await userEvent.click(screen.getByTestId(`${variant}-button-default`));
    expect(onClick).toBeCalledTimes(2);
    await userEvent.click(screen.getByTestId(`${variant}-button-disabled`));
    expect(onClick).toBeCalledTimes(2);
    await userEvent.click(screen.getByTestId(`${variant}-button-loading`));
    expect(onClick).toBeCalledTimes(2);
  });
});
