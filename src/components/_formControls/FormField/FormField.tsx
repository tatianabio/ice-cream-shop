import React, { ReactNode } from 'react';
import './FormField.scss';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import cx from 'classnames';
import Tooltip from '../../atoms/Tooltip';

export interface IFormField {
  /** Name of the field used for the identification of the field's value(s) */
  name: string;
  /** The interactive element of the field */
  children: ReactNode | string;
  /** Label of the field describing the field for users */
  label: string;
  /** Is the label hidden from users (NOT displayed on the screen)? */
  isLabelHidden?: boolean;
  /** Is the label bold? */
  isLabelBold?: boolean;
  /** Does the field have a tooltip? */
  hasTooltip?: boolean;
  /** The text of the tooltip */
  tooltipText?: string;
  /** Does the field have some space for showing an error message? */
  hasErrorMessage?: boolean;
  /** Technical attributes */
  'data-testid'?: string;
  className?: string;
}

const FormField = ({
  name,
  label,
  isLabelHidden = false,
  hasTooltip = true,
  tooltipText,
  hasErrorMessage = true,
  isLabelBold = true,
  children,
  'data-testid': testId,
  className,
}: IFormField) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();
  const errorText = (errors[name]?.message as string) || '';

  return (
    <div className={cx('form-field', className)} data-testid={`${testId}-form-field`}>
      <div className='form-field__label-wrapper' data-testid={`${testId}-label-wrapper`}>
        <label
          className={cx(
            'form-field__label',
            isLabelHidden && 'visually-hidden',
            isLabelBold && 'form-field__label--bold'
          )}
          htmlFor={`${name}-field`}
          data-testid={`${testId}-label`}
        >
          {t(`${label}`)}
        </label>
        {hasTooltip && <Tooltip className='form-field__tooltip' text={tooltipText} data-testid={testId} />}
      </div>
      {children}
      {hasErrorMessage && (
        <p className='form-field__error-message' aria-hidden={!errorText} data-testid={`${testId}-error-message`}>
          {t(`${errorText}`)}
        </p>
      )}
    </div>
  );
};

export default FormField;
