import React from 'react';
import SocialButton from './SocialButton';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Atoms/SocialButton',
  component: SocialButton,
};

export const Demo = () => (
  <div
    style={{
      backgroundColor: 'var(--special-pink)',
      padding: '16px',
      width: 'fit-content',
    }}
  >
    <StoryContainer title='Social Networks Links' text='vkontakte' hasPadding={false}>
      <SocialButton socialNetwork='vkontakte' data-testid='vkontakte-link' />
    </StoryContainer>
    <StoryContainer text='telegram' hasPadding={false}>
      <SocialButton socialNetwork='telegram' data-testid='telegram-link' />
    </StoryContainer>
    <StoryContainer text='youtube' hasPadding={false}>
      <SocialButton socialNetwork='youtube' data-testid='youtube-link' />
    </StoryContainer>
  </div>
);

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8172%3A3510&t=mTfv2Qdgxem0exJb-4',
  },
};
