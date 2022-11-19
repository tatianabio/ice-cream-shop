import React, { HTMLProps, ReactElement } from 'react';
import './StoryContainer.scss';

interface IStoryContainer extends HTMLProps<HTMLDivElement> {
  title?: string;
  text?: string;
  children: ReactElement;
}

const StoryContainer = ({
  title,
  text,
  children,
  ...props
}: IStoryContainer) => (
  <div {...props} className='story-container'>
    {title && <div className='story-container__title'>{title}</div>}
    {text && <div className='story-container__text'>{text}</div>}
    {children}
  </div>
);

export default StoryContainer;
