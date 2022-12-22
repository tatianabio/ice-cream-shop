import React, { HTMLProps, ReactElement } from 'react';
import './StoryContainer.scss';
import cx from 'classnames';

interface IStoryContainer extends HTMLProps<HTMLDivElement> {
  title?: string;
  text?: string;
  children: ReactElement;
  hasPadding?: boolean;
  hasPinkBackground?: boolean;
}

const StoryContainer = ({
  title,
  text,
  children,
  hasPadding = true,
  hasPinkBackground = true,
  ...props
}: IStoryContainer) => (
  <div
    {...props}
    className={cx(
      'story-container',
      hasPadding && 'story-container--padding',
      hasPinkBackground && 'story-container--pink'
    )}
  >
    {title && <div className='story-container__title'>{title}</div>}
    {text && <div className='story-container__text'>{text}</div>}
    {children}
  </div>
);

export default StoryContainer;
