import { render, screen } from '@testing-library/react';
import BenefitsTile from './BenefitsTile';

describe('Benefits Tile render', () => {
  it('should render without testId', () => {
    render(<BenefitsTile />);
    expect(screen.getByTestId('benefits-tile-section')).toBeInTheDocument();
  });
});
