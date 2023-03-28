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
    await userEvent.click(screen.getByTestId(`demo-radio-${filterFatContent[3].valueName}`));

    // checkboxes onChange
    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}`));
  });
});
