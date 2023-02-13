import React, { useState } from 'react';
import './CheckGroup.scss';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { ICheckList } from './utils';
import CheckboxChecked from '../../../assets/svg/checkboxChecked';
import CheckboxFrame from '../../../assets/svg/checkboxFrame';
import RadioChecked from '../../../assets/svg/radioChecked';
import RadioFrame from '../../../assets/svg/radioFrame';

interface ICheckGroup {
  /** The list of radio-buttons or checkboxes  */
  checkGroup: ICheckList['list'];
  /** The type of inputs: radio-button or checkbox */
  inputType: 'radio' | 'checkbox';
  /** Technical attributes */
  'data-testid': string;
  name?: string;
}

const CheckGroup = ({ checkGroup, inputType, 'data-testid': testId, name = '' }: ICheckGroup) => {
  const { t } = useTranslation();

  const [list, setList] = useState(checkGroup);

  const displayedCheckGroup = list.map((item, index) => {
    const { label, valueName, isChecked } = item;

    const mountMarkBox = (isBoxChecked: boolean) => {
      console.log('item', item);
      if (inputType === 'checkbox') {
        return isBoxChecked ? <CheckboxChecked /> : <CheckboxFrame />;
      }
      return isBoxChecked ? <RadioChecked /> : <RadioFrame />;
    };

    // const onChangeBoxHandler = () => {
    //   setList(
    //     list.map((old) => {
    //       return { ...old, isInitiallyChecked: old.valueName === valueName };
    //     })
    //   );
    // };

    const onChangeBoxHandler = () => {
      setList(
        list.map((old) => {
          return { ...old, isChecked: old.valueName === valueName };
        })
      );
    };

    return (
      <li className='check-group__item' key={valueName}>
        <label className='check-group__label' htmlFor={valueName}>
          <input
            className={cx('check-group__input')}
            type={inputType}
            id={valueName}
            checked={isChecked}
            // value={valueName}
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
