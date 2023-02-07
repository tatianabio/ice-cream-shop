import React, { HTMLProps, ReactElement } from 'react';
import cx from 'classnames';
import SocialTelegram from '../../../assets/svg/social-telegram';
import './SocialButton.scss';
import SocialYoutube from '../../../assets/svg/social-youtube';
import SocialVkontakte from '../../../assets/svg/social-vkontakte';
import { activeIndexSelector, ISliderTileStore, useSliderTileStore } from '../SliderTile/SliderTile.store';
import { shallow } from 'zustand/shallow';

export type ISocial = 'vkontakte' | 'youtube' | 'telegram';

export type ISocialNetworksList = Record<ISocial, { link: string; icon: ReactElement }>;

interface ISocialButton extends HTMLProps<HTMLAnchorElement> {
  /** Links to our social networks */
  socialNetwork: ISocial;
  /** Technical attributes */
  'data-testid': string;
}

export const socialNetworks: ISocialNetworksList = {
  vkontakte: { link: 'https://vk.com/', icon: <SocialVkontakte /> },
  youtube: { link: 'https://www.youtube.com/', icon: <SocialYoutube /> },
  telegram: { link: 'https://telegram.org/', icon: <SocialTelegram /> },
};

function SocialButton({ socialNetwork, ...props }: ISocialButton) {
  const currentNetwork = socialNetworks[socialNetwork];

  const { activeItemIndex } = useSliderTileStore(activeIndexSelector, shallow);
  const offers = useSliderTileStore((store: ISliderTileStore) => store.offers, shallow);

  const { backgroundColor } = offers[activeItemIndex];

  return (
    <a
      {...props}
      href={currentNetwork.link}
      className={cx('social-network-link', `special-color-${backgroundColor}`, props.className)}
      target='_blank'
      rel='noreferrer'
    >
      <span className='visually-hidden'>{socialNetwork}</span>
      {currentNetwork.icon}
    </a>
  );
}

export default SocialButton;
