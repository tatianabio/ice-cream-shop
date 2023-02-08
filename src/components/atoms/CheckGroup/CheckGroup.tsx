import React from 'react';
import './CheckGroup.scss';
import cx from 'classnames';
import { ICheckList } from './utils';
import CheckboxChecked from '../../../assets/svg/checkboxChecked';
import CheckboxFrame from '../../../assets/svg/checkboxFrame';
import RadioChecked from '../../../assets/svg/radioChecked';
import RadioFrame from '../../../assets/svg/radioFrame';

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

    const mountMarkBox = () => {
      if (inputType === 'checkbox') {
        return isChecked ? <CheckboxChecked /> : <CheckboxFrame />;
      }
      return isChecked ? <RadioChecked /> : <RadioFrame />;
    };

    return (
      <li className='check-group__item' key={valueName}>
        <label className='check-group__label' htmlFor={valueName}>
          <input
            className={cx('check-group__input', 'visually-hidden')}
            type={inputType}
            id={valueName}
            // checked={isChecked}
            // value={valueName}
            name={inputType === 'radio' ? listTitle : valueName}
          />
          <span className={cx('check-group__mark-box', `check-group__mark-box--${inputType}`)}>{mountMarkBox()}</span>
          <span className='check-group__displayed-label'>{label}</span>
        </label>
      </li>
    );
  });

  return (
    <ul className='check-group' data-testid={`${testId}-${inputType}-${listTitle}`}>
      {displayedCheckGroup}
    </ul>
  );
};

export default CheckGroup;
