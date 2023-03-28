import { render, screen } from '@testing-library/react';
import { Demo } from './CatalogSection.stories';

describe('Catalog Section tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('demo-catalog-section')).toBeInTheDocument();
  });
});
