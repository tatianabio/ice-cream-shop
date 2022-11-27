import BlogArticleTile from './BlogArticleTile';
import blogArticleMswHandlers from '../../../mock/msw-handlers/blog-article';
import StoryContainer from '../../utils/StoryContainer';
import { blogArticleInfo } from '../../../mock/data/blog-article-info';

export default {
  title: 'Components/Atoms/BlogArticleTile',
  component: BlogArticleTile,
  parameters: {
    msw: {
      handlers: blogArticleMswHandlers,
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
