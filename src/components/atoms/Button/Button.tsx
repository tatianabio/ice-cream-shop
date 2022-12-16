import React, { HTMLProps } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import './Button.scss';

export interface IButton extends HTMLProps<HTMLButtonElement> {
  /** Text inside the button */
  text: string;
  /** Variant of the button */
  variant: 'primary' | 'secondary' | 'thirdly';
  /** A state of the button while loading */
  loading?: boolean;
  /** Technical attributes */
  'data-testid': string;
}

const Button = ({ text, variant, loading, type = 'button', 'data-testid': testId, ...props }: IButton) => {
  const { t } = useTranslation();

  return (
    <button
      {...props}
      type={type as 'button'}
      disabled={props.disabled || loading}
      className={cx('button', `button--${variant}`, loading && 'button--loading', props.className)}
      tabIndex={loading ? -1 : props.tabIndex}
      data-testid={`${testId}-button`}
    >
      {t(text)}
    </button>
  );
};

export default Button;
