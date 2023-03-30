import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './CatalogFilter.stories';
import { filterFatContent, filterFillers } from '../../atoms/CheckGroup/utils';
import sortingOptions from '../../atoms/Select/utils';

describe('Catalog Filter tests', () => {
  it('render and applying filters', async () => {
    render(<Demo />);
    const applyButton = screen.getByTestId('demo-filter-apply-button');

    // render
    expect(screen.getByTestId('demo-catalog-filter')).toBeInTheDocument();

    // applying filters
    await userEvent.click(screen.getByTestId(`demo-radio-${filterFatContent[3].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-checkbox-${filterFillers[3].valueName}`));
    await userEvent.selectOptions(screen.getByTestId('demo-select'), sortingOptions[1].key);
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowLeft}');
    await act(async () => {
      await userEvent.click(applyButton);
    });
  });
});
