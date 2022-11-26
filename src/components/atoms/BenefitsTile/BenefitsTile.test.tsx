import { render, screen } from '@testing-library/react';
import { Demo } from './BenefitsTile.stories';

describe('Benefits Tile render', () => {
  it('should render', () => {
    render(<Demo />);
    expect(screen.getByTestId('test-section')).toBeInTheDocument();
  });
});
