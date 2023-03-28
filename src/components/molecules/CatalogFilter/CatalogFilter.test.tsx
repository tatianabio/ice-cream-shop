import { render, screen } from '@testing-library/react';
import { Demo } from './CatalogFilter.stories';

describe('Catalog Filter tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-catalog-filter')).toBeInTheDocument();
  });
});
