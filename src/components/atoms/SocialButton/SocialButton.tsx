import React, { HTMLProps, ReactElement } from 'react';
import cx from 'classnames';
import SocialTelegram from '../../../assets/svg/social-telegram';
import './SocialButton.scss';
import SocialYoutube from '../../../assets/svg/social-youtube';
import SocialVkontakte from '../../../assets/svg/social-vkontakte';

export type ISocial = 'vkontakte' | 'youtube' | 'telegram';
interface ISocialButton extends HTMLProps<HTMLAnchorElement> {
  /** Links to our social networks */
  socialMedia: ISocial;
  /** Technical attributes */
  'data-testid': string;
}

export const socialNetworks: Record<ISocial, { link: string; icon: ReactElement }> = {
  vkontakte: { link: 'https://vk.com/', icon: <SocialVkontakte /> },
  youtube: { link: 'https://www.youtube.com/', icon: <SocialYoutube /> },
  telegram: { link: 'https://telegram.org/', icon: <SocialTelegram /> },
};

function SocialButton({ socialMedia, ...props }: ISocialButton) {
  const currentNetwork = socialNetworks[socialMedia];

  return (
    <a
      {...props}
      href={currentNetwork.link}
      className={cx('social-network-link', props.className)}
      target='_blank'
      rel='noreferrer'
    >
      <span className='visually-hidden'>{socialMedia}</span>
      {currentNetwork.icon}
    </a>
  );
}

export default SocialButton;
