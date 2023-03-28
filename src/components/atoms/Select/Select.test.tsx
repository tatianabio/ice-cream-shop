import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './Select.stories';
import sortingOptions from './utils';

describe('Select tests', () => {
  it('render and select onChange', async () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-select')).toBeInTheDocument();
    expect(screen.getByTestId('demo-select')).toHaveValue(sortingOptions[0].key);
    await userEvent.selectOptions(screen.getByTestId('demo-select'), sortingOptions[1].key);
    expect(screen.getByTestId('demo-select')).toHaveValue(sortingOptions[1].key);
  });
});
