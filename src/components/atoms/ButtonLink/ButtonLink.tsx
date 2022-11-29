import React, { HTMLProps } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import './ButtonLink.scss';

export interface IButtonLink extends HTMLProps<HTMLAnchorElement> {
  /** Text inside the buttonLink */
  text: string;
  /** Link which is opened while clicking on the buttonLink */
  link: string;
  /** Variant of the buttonLink */
  variant: 'primary' | 'secondary' | 'thirdly';
  /** Technical attributes */
  'data-testid': string;
}

const ButtonLink = ({ text, link, variant, ...props }: IButtonLink) => {
  const { t } = useTranslation();

  return (
    <a
      {...props}
      href={link}
      target='_blank'
      rel='noreferrer'
      className={cx('button-link', `button-link--${variant}`, props.className)}
    >
      {t(text)}
    </a>
  );
};

export default ButtonLink;
