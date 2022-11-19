import React, { HTMLProps } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

interface IButton extends HTMLProps<HTMLButtonElement> {
  text: string;
  variant: 'primary' | 'secondary' | 'thirdly';
  loading?: boolean;
  'data-testid': string;
}

const Button = ({
  text,
  variant,
  loading,
  type = 'button',
  ...props
}: IButton) => {
  const { t } = useTranslation();

  return (
    <button
      {...props}
      type={type as 'button'}
      className={cx(`button--${variant}`, loading && 'button--loading')}
    >
      {t(text)}
    </button>
  );
};

export default Button;
