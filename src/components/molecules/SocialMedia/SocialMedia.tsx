import React from 'react';
import './SocialMedia.scss';
import SocialButton, { ISocial, socialNetworks } from '../../atoms/SocialButton/SocialButton';

const SocialMedia = () => {
  const socialMediaList = Object.keys(socialNetworks).map((socialNetwork: string) => {
    return (
      <li key={socialNetwork}>
        <SocialButton socialNetwork={socialNetwork as ISocial} data-testid={`social-${socialNetwork}`} />
      </li>
    );
  });

  return <ul className='social-media-list'>{socialMediaList}</ul>;
};

export default SocialMedia;
