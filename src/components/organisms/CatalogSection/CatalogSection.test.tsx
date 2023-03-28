import { act, render, screen } from '@testing-library/react';
import { Demo } from './CatalogSection.stories';

describe('Catalog Section tests', () => {
  it('render', async () => {
    await act(() => {
      render(<Demo />);
    });

    expect(screen.getByTestId('demo-catalog-section')).toBeInTheDocument();
  });
});
