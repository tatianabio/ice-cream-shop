import React, { HTMLProps } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelect extends HTMLProps<HTMLSelectElement> {
  /** List of options for the select */
  optionsList: string[];
  /** Label of the select accessible to sreenreaders */
  selectLabel: string;
  /** Technical attributes */
  'data-testid': string;
}

const Select = ({ 'data-testid': testId, selectLabel, optionsList, ...props }: ISelect) => {
  const { t } = useTranslation();
  const displayedOptions = optionsList.map((option) => {
    return (
      <option key={option} value={option}>
        {t(option)}
      </option>
    );
  });
  return (
    <select {...props} aria-label={`${t(selectLabel)}`} data-testid={`${testId}-select`}>
      {displayedOptions}
    </select>
  );
};

export default Select;
