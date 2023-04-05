import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckGroup from './CheckGroup';
import { filterFatContent, filterFillers } from './utils';

const TestComponent = () => {
  return (
    <div>
      <CheckGroup
        checkGroup={filterFatContent}
        name='test'
        data-testid='demo'
        inputType='radio'
        initiallyChecked={[filterFatContent[1]]}
      />
      <CheckGroup
        checkGroup={filterFillers}
        data-testid='demo'
        inputType='checkbox'
        initiallyChecked={[filterFillers[0], filterFillers[1]]}
      />
    </div>
  );
};

describe('CheckGroup tests', () => {
  it('render and checkGroup onChange', async () => {
    render(<TestComponent />);

    // render
    expect(screen.getByTestId('demo-radio')).toBeInTheDocument();
    expect(screen.getByTestId('demo-checkbox')).toBeInTheDocument();

    // radio buttons onChange
    expect(screen.getByTestId(`demo-radio-${filterFatContent[1].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFatContent[1].valueName}-radio-checked`)
    );
    expect(screen.getByTestId(`demo-radio-${filterFatContent[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFatContent[3].valueName}-radio-frame`)
    );

    await userEvent.click(screen.getByTestId(`demo-radio-${filterFatContent[3].valueName}`));
    expect(screen.getByTestId(`demo-radio-${filterFatContent[1].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFatContent[1].valueName}-radio-frame`)
    );
    expect(screen.getByTestId(`demo-radio-${filterFatContent[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFatContent[3].valueName}-radio-checked`)
    );

    // checkboxes onChange
    expect(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFillers[0].valueName}-checkbox-checked`)
    );
    expect(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFillers[3].valueName}-checkbox-frame`)
    );

    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}`));
    expect(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFillers[0].valueName}-checkbox-frame`)
    );
    expect(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFillers[3].valueName}-checkbox-frame`)
    );

    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}`));
    expect(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}-mark-box`)).toContainElement(
      screen.getByTestId(`demo-${filterFillers[3].valueName}-checkbox-checked`)
    );
  });
});
