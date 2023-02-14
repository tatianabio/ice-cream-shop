import React, { useState } from 'react';
import './CheckGroup.scss';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { ICheckItem } from './utils';
import CheckboxChecked from '../../../assets/svg/checkboxChecked';
import CheckboxFrame from '../../../assets/svg/checkboxFrame';
import RadioChecked from '../../../assets/svg/radioChecked';
import RadioFrame from '../../../assets/svg/radioFrame';

export interface ICheckGroup {
  /** The list of radio-buttons or checkboxes  */
  checkGroup: ICheckItem[];
  /** The type of inputs: radio-button or checkbox */
  inputType: 'radio' | 'checkbox';
  /** The name of the checkbox group */
  name?: string;
  /** Technical attributes */
  'data-testid': string;
  onChange?: (checked: ICheckItem[]) => void;
  initiallyChecked?: ICheckItem[];
}

const CheckGroup = ({
  checkGroup,
  initiallyChecked,
  onChange,
  inputType,
  'data-testid': testId,
  name = '',
}: ICheckGroup) => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(initiallyChecked || []);

  const displayedCheckGroup = checkGroup.map((item) => {
    const { label, valueName } = item;

    const isChecked = !!checked.find((checkedItem) => checkedItem.valueName === item.valueName);
    const mountMarkBox = (isBoxChecked: boolean) => {
      if (inputType === 'checkbox') {
        return isBoxChecked ? <CheckboxChecked /> : <CheckboxFrame />;
      }
      return isBoxChecked ? <RadioChecked /> : <RadioFrame />;
    };

    const onChangeBoxHandler = () => {
      if (inputType === 'checkbox') {
        const alreadyCheckedIndex = checked.indexOf(item);

        setChecked(
          alreadyCheckedIndex === -1
            ? [...checked, item]
            : checked.filter((_: ICheckItem, index: number) => index !== alreadyCheckedIndex)
        );
      } else {
        const newChecked: ICheckItem[] = [item];
        setChecked(newChecked);
      }
      console.log('checked', checked);
      onChange?.(checked);
    };

    return (
      <li className='check-group__item' key={valueName}>
        <label className='check-group__label' htmlFor={valueName}>
          <input
            className={cx('check-group__input', 'visually-hidden')}
            type={inputType}
            id={valueName}
            checked={isChecked}
            name={inputType === 'radio' ? name : valueName}
            onChange={onChangeBoxHandler}
          />
          <span className={cx('check-group__mark-box', `check-group__mark-box--${inputType}`)}>
            {mountMarkBox(isChecked)}
          </span>
          <span className='check-group__displayed-label'>{t(`${label}`)}</span>
        </label>
      </li>
    );
  });

  return (
    <ul className='check-group' data-testid={`${testId}-${inputType}`}>
      {displayedCheckGroup}
    </ul>
  );
};

export default CheckGroup;
