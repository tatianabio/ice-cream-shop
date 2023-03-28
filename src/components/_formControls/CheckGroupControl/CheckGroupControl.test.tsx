import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './CheckGroupControl.stories';
import { filterFatContent, filterFillers } from '../../atoms/CheckGroup/utils';

describe('CheckGroupControl tests', () => {
  it('render', async () => {
    // render
    render(<Demo />);
    expect(screen.getByTestId('fat-content-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('fillers-form-field')).toBeInTheDocument();

    // radio buttons onChange
    await userEvent.click(screen.getByTestId(`fat-content-radio-${filterFatContent[3].valueName}`));

    // checkboxes onChange
    await userEvent.click(screen.getByTestId(`fillers-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`fillers-checkbox-${filterFillers[3].valueName}`));
  });
});
