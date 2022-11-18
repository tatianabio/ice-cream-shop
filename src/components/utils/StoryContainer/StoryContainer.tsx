import React, { ReactElement } from 'react';
import './StoryContainer.scss';

interface IStoryContainer {
  title?: string;
  text?: string;
  children: ReactElement;
}

const StoryContainer = ({ title, text, children }: IStoryContainer) => {
  return (
    <div className='story-container'>
      {title && <div className='story-container__title'>{title}</div>}
      {text && <div className='story-container__text'>{text}</div>}
      {children}
    </div>
  );
};

export default StoryContainer;
