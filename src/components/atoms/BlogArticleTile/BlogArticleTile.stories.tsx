import BlogArticleTile from './BlogArticleTile';
import StoryContainer from '../../storybookUtils/StoryContainer';
import { blogArticleInfo } from '../../../mock/data/blogArticleInfo';
import globalMswHandlers from '../../../mock/mswHandlers';

export default {
  title: 'Components/Atoms/BlogArticleTile',
  component: BlogArticleTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8108%3A5825&t=MCJD7XbKAUXwgrGA-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Blog article tile' text='Link to a new article in our blog'>
      <BlogArticleTile data-testid='fruit-sorbets' info={blogArticleInfo} />
    </StoryContainer>
  );
};
