import { render, screen } from '@testing-library/react';
import BulletPagination from './BulletPagination';

describe('Bullet Pagination Tests', () => {
  it('Bullet Pagination render', () => {
    render(<BulletPagination data-testid='themes' />);
    expect(screen.getByTestId('themes-bullet-list')).toBeInTheDocument();
    expect(screen.getByTestId('themes-bullet-item-0')).toHaveClass('bullet-item--active');
    expect(screen.getByTestId('themes-bullet-item-1')).not.toHaveClass('bullet-item--active');
    expect(screen.getByTestId('themes-bullet-item-2')).not.toHaveClass('bullet-item--active');
  });
});
