import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import globalMswHandlers from '../../../mock/mswHandlers';
import TileContainer from './TileContainer';
import SubscriptionSection from '../SubscriptionSection';
import { blogArticleInfo } from '../../../mock/data/blogArticleInfo';
import BlogArticleTile from '../../atoms/BlogArticleTile';

export default {
  title: 'Components/Organisms/TileContainer',
  component: TileContainer,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7577%3A3661&t=2QZn8OUXTH1QPWKt-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Tile Container'
      text='containing Blog Article Tile and Subscription Tile as an example'
      style={{ maxWidth: '1170px', minHeight: '600px', height: 'min-content', padding: '10px' }}
    >
      <>
        <TileContainer data-testid='demo'>
          <>
            <BlogArticleTile data-testid='fruit-sorbets' info={blogArticleInfo} />
            <SubscriptionSection data-testid='demo' />
          </>
        </TileContainer>
      </>
    </StoryContainer>
  );
};
