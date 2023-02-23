import React, { HTMLProps, useEffect, useState } from 'react';
import './Select.scss';
import { useTranslation } from 'react-i18next';
import { IOption } from './utils';

export interface ISelect extends HTMLProps<HTMLSelectElement> {
  /** List of options for the select */
  optionsList: IOption[];
  /** Label of the select accessible to sreenreaders */
  selectLabel: string;
  initiallySelected: IOption;
  /** Technical attributes */
  'data-testid': string;
}

const Select = ({ 'data-testid': testId, selectLabel, optionsList, initiallySelected, ...props }: ISelect) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<IOption>();

  useEffect(() => {
    initiallySelected && setSelected(initiallySelected);
  }, [initiallySelected]);

  const displayedOptions = optionsList.map((option) => {
    const { key, label } = option;

    const isSelected = selected?.key === key;

    return (
      <option className='select__option' key={key} value={key} selected={isSelected}>
        {t(label)}
      </option>
    );
  });
  return (
    <select {...props} className='select' aria-label={`${t(selectLabel)}`} data-testid={`${testId}-select`}>
      {displayedOptions}
    </select>
  );
};

export default Select;
