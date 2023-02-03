import { render, screen } from '@testing-library/react';
import React from 'react';
import BlogArticleTile from '../../atoms/BlogArticleTile';
import { blogArticleInfo } from '../../../mock/data/blogArticleInfo';
import SubscriptionSection from '../SubscriptionSection';
import TileContainer from './TileContainer';

const TestComponent = () => {
  return (
    <TileContainer data-testid='demo'>
      <>
        <BlogArticleTile data-testid='fruit-sorbets' info={blogArticleInfo} />
        <SubscriptionSection data-testid='demo' />
      </>
    </TileContainer>
  );
};

describe('Tile Container Tests', () => {
  it('render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-tile-container')).toBeInTheDocument();
  });
});
