import React from 'react';
import './SocialMedia.scss';
import cx from 'classnames';
import SocialButton, { ISocial, socialNetworks } from '../../atoms/SocialButton/SocialButton';

interface ISocialMedia {
  /** Technical attributes */
  className?: string;
}

const SocialMedia = ({ className }: ISocialMedia) => {
  const socialMediaList = Object.keys(socialNetworks).map((socialNetwork: string) => {
    return (
      <li key={socialNetwork}>
        <SocialButton socialNetwork={socialNetwork as ISocial} data-testid={`social-${socialNetwork}`} />
      </li>
    );
  });

  return <ul className={cx('social-media-list', className)}>{socialMediaList}</ul>;
};

export default SocialMedia;
