import React, { ChangeEvent, HTMLProps, useEffect, useState } from 'react';
import './Select.scss';
import { useTranslation } from 'react-i18next';
import { IOption } from './utils';

export interface ISelect extends Omit<HTMLProps<HTMLSelectElement>, 'onChange'> {
  /** List of options for the select */
  optionsList: IOption[];
  /** Label of the select accessible to sreenreaders */
  selectLabel: string;
  /** Initially selected option */
  initiallySelected?: IOption;
  onChange?: (selected: IOption) => void;
  /** Technical attributes */
  'data-testid': string;
}

const Select = ({
  'data-testid': testId,
  selectLabel,
  optionsList,
  initiallySelected,
  onChange,
  ...props
}: ISelect) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<IOption>();

  useEffect(() => {
    initiallySelected && setSelected(initiallySelected);
  }, [initiallySelected]);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = optionsList.find((item) => item.key === event.target.value);
    setSelected(selectedOption);
    selectedOption && onChange?.(selectedOption);
  };

  const displayedOptions = optionsList.map((option) => {
    const { key, label } = option;

    return (
      <option className='select__option' key={key} value={key}>
        {t(label)}
      </option>
    );
  });
  return (
    <select
      {...props}
      className='select'
      aria-label={`${t(selectLabel)}`}
      data-testid={`${testId}-select`}
      onChange={onChangeHandler}
      value={selected?.key}
    >
      {displayedOptions}
    </select>
  );
};

export default Select;
