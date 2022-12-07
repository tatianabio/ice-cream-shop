import { render, screen } from '@testing-library/react';
import BulletPagination from './BulletPagination';

describe('Bullet Pagination Tests', () => {
  it('Bullet Pagination render', () => {
    render(<BulletPagination data-testid='test' />);
    expect(screen.getByTestId('test-bullet-list')).toBeInTheDocument();
    expect(screen.getByTestId('test-bullet-item-0')).toHaveClass('bullet-item--active');
    expect(screen.getByTestId('test-bullet-item-1')).not.toHaveClass('bullet-item--active');
    expect(screen.getByTestId('test-bullet-item-2')).not.toHaveClass('bullet-item--active');
  });
});
