import React from 'react';
import { ICheckList } from './utils';

interface ICheckGroup {
  /** The list of radio-buttons or checkboxes  */
  checkGroup: ICheckList;
  /** The type of inputs: radio-button or checkbox */
  inputType: 'radio' | 'checkbox';
  /** Technical attributes */
  'data-testid': string;
}

const CheckGroup = ({ checkGroup, inputType, 'data-testid': testId }: ICheckGroup) => {
  const { list, listTitle } = checkGroup;
  const displayedCheckGroup = list.map((item) => {
    const { label, valueName, isChecked } = item;
    return (
      <li key={valueName}>
        <input
          type={inputType}
          id={valueName}
          checked={isChecked}
          value={valueName}
          name={inputType === 'radio' ? listTitle : valueName}
        />
        <label htmlFor={valueName}>{label}</label>
      </li>
    );
  });

  return <ul data-testid={`${testId}-${inputType}-${listTitle}`}>{displayedCheckGroup}</ul>;
};

export default CheckGroup;
