import React, { useEffect, useState } from 'react';
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

  const [checked, setChecked] = useState<ICheckItem[]>([]);

  useEffect(() => {
    initiallyChecked && setChecked(initiallyChecked);
  }, [initiallyChecked]);

  const displayedCheckGroup = checkGroup.map((item) => {
    const { label, valueName } = item;

    const isChecked = !!checked.find((checkedItem) => checkedItem.valueName === item.valueName);

    const mountMarkBox = (isBoxChecked: boolean) => {
      if (inputType === 'checkbox') {
        return isBoxChecked ? (
          <CheckboxChecked data-testid={`${testId}-${valueName}-checkbox-checked`} />
        ) : (
          <CheckboxFrame data-testid={`${testId}-${valueName}-checkbox-frame`} />
        );
      }
      return isBoxChecked ? (
        <RadioChecked data-testid={`${testId}-${valueName}-radio-checked`} />
      ) : (
        <RadioFrame data-testid={`${testId}-${valueName}-radio-frame`} />
      );
    };

    const onChangeBoxHandler = () => {
      let newChecked: ICheckItem[];

      if (inputType === 'checkbox') {
        const alreadyCheckedIndex = checked.findIndex((checkedItem) => checkedItem.valueName === item.valueName);
        newChecked =
          alreadyCheckedIndex === -1
            ? [...checked, item]
            : checked.filter((_: ICheckItem, index: number) => index !== alreadyCheckedIndex);
      } else {
        newChecked = [item];
      }

      setChecked(newChecked);
      onChange?.(newChecked);
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
            data-testid={`${testId}-${inputType}-${valueName}`}
          />
          <span
            className={cx('check-group__mark-box', `check-group__mark-box--${inputType}`)}
            data-testid={`${testId}-${inputType}-${valueName}-mark-box`}
          >
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
