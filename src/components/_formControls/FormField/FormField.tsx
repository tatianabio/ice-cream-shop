import React, { ReactNode } from 'react';
import './FormField.scss';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import cx from 'classnames';

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
  /** Does the field have some space for showing an error message? */
  hasErrorMessage?: boolean;
  /** Technical attributes */
  'data-testid'?: string;
}

const FormField = ({
  name,
  label,
  isLabelHidden = false,
  hasTooltip = true,
  hasErrorMessage = true,
  isLabelBold = true,
  children,
  'data-testid': testId,
}: IFormField) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();
  const errorText = (errors[name]?.message as string) || '';

  return (
    <div className='form-field' data-testid={`${testId}-form-field`}>
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
          {label}
        </label>
        {hasTooltip && (
          <span className='form-field__tooltip' data-testid={`${testId}-tooltip`}>
            <button type='button' aria-label='Show tooltip' className='form-field__tooltip-toggle' />
            <span className='form-field__tooltip-text'>{t('')}</span>
          </span>
        )}
      </div>
      {children}
      {hasErrorMessage && (
        <p className='form-field__error-message' aria-hidden={!errorText} data-testid={`${testId}-error-message`}>
          {errorText}
        </p>
      )}
    </div>
  );
};

export default FormField;
