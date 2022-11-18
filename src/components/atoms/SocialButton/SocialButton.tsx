import React, { HTMLProps } from 'react';
import SocialTelegram from '../../../assets/svg/social-telegram';
import './SocialButton.scss';
import SocialYoutube from '../../../assets/svg/social-youtube';
import SocialVkontakte from '../../../assets/svg/social-vkontakte';

interface ISocialButton extends HTMLProps<HTMLAnchorElement> {
  /** Links to our social networks*/
  socialMedia: 'vkontakte' | 'youtube' | 'telegram';
}

const socialNetworks = {
  vkontakte: { link: 'https://vk.com/', icon: <SocialTelegram /> },
  youtube: { link: 'https://www.youtube.com/', icon: <SocialYoutube /> },
  telegram: { link: 'https://telegram.org/', icon: <SocialVkontakte /> },
};

const SocialButton = ({ socialMedia, ...props }: ISocialButton) => {
  const currentNetwork = socialNetworks[socialMedia];

  return (
    <a
      {...props}
      href={currentNetwork.link}
      className={'social-network-link'}
      target='_blank'
    >
      <>
        <span className='visually-hidden'>{socialMedia}</span>
        {currentNetwork.icon}
      </>
    </a>
  );
};

export default SocialButton;
