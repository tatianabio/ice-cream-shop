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
    expect(screen.getByTestId(`fat-content-radio-${filterFatContent[1].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fat-content-${filterFatContent[1].valueName}-radio-checked`)
    );
    await userEvent.click(screen.getByTestId(`fat-content-radio-${filterFatContent[3].valueName}`));
    expect(screen.getByTestId(`fat-content-radio-${filterFatContent[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fat-content-${filterFatContent[3].valueName}-radio-checked`)
    );

    // checkboxes onChange
    expect(screen.getByTestId(`fillers-checkbox-${filterFillers[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fillers-${filterFillers[3].valueName}-checkbox-frame`)
    );
    expect(screen.getByTestId(`fillers-checkbox-${filterFillers[0].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fillers-${filterFillers[0].valueName}-checkbox-checked`)
    );
    await userEvent.click(screen.getByTestId(`fillers-checkbox-${filterFillers[0].valueName}`));
    expect(screen.getByTestId(`fillers-checkbox-${filterFillers[0].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fillers-${filterFillers[0].valueName}-checkbox-frame`)
    );
    await userEvent.click(screen.getByTestId(`fillers-checkbox-${filterFillers[3].valueName}`));
    expect(screen.getByTestId(`fillers-checkbox-${filterFillers[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`fillers-${filterFillers[3].valueName}-checkbox-checked`)
    );
  });
});
