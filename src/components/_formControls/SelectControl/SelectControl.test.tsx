import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './SelectControl.stories';
import sortingOptions from '../../atoms/Select/utils';

describe('Select Control tests', () => {
  it('render and select control onChange', async () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('demo-select')).toHaveValue(sortingOptions[1].key);
    await userEvent.selectOptions(screen.getByTestId('demo-select'), sortingOptions[2].key);
    expect(screen.getByTestId('demo-select')).toHaveValue(sortingOptions[2].key);
  });
});
