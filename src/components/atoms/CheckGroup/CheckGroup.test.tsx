import React from 'react';
import { render, screen } from '@testing-library/react';
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
  it('render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-radio')).toBeInTheDocument();
    expect(screen.getByTestId('demo-checkbox')).toBeInTheDocument();
  });
});
