import React, { HTMLProps } from 'react';
import './button.css';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const { t, i18n } = useTranslation();

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      {...props}
      type='submit'
      className={cx('storybook-button', `storybook-button--${size}`, mode)}
      style={{ backgroundColor }}
    >
      {t('Welcome to React')}
    </button>
  );
};
