import React, { HTMLProps } from 'react';

interface ISelect extends HTMLProps<HTMLSelectElement> {
  selectLabel: string;
  /** Technical attributes */
  'data-testid': string;
}

const Select = ({ 'data-testid': testId, selectLabel, ...props }: ISelect) => {
  return <select {...props} aria-label={selectLabel} data-testid={`${testId}-select`} />;
};

export default Select;
