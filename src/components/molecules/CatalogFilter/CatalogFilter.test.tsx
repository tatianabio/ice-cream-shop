import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './CatalogFilter.stories';
import { filterFatContent, filterFillers } from '../../atoms/CheckGroup/utils';
import sortingOptions from '../../atoms/Select/utils';
import useCatalogFilterStore from './CatalogFilter.store';
import { products } from '../../../mock/data/products';

describe('Catalog Filter tests', () => {
  it('render and applying filters', async () => {
    useCatalogFilterStore.setState({ allProductsList: products });
    render(<Demo />);
    const applyButton = screen.getByTestId('demo-filter-apply-button');

    // render
    expect(screen.getByTestId('demo-catalog-filter')).toBeInTheDocument();

    // tests on select for sorting order
    await userEvent.selectOptions(screen.getByTestId('demo-catalog-filter-select'), sortingOptions[2].key);

    await act(async () => {
      await userEvent.click(applyButton);
    });

    await userEvent.selectOptions(screen.getByTestId('demo-catalog-filter-select'), sortingOptions[1].key);

    await act(async () => {
      await userEvent.click(applyButton);
    });

    // tests on radio, checkboxes and slider range
    await userEvent.click(screen.getByTestId(`demo-catalog-filter-radio-${filterFatContent[3].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-catalog-filter-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-catalog-filter-checkbox-${filterFillers[0].valueName}`));
    await userEvent.click(screen.getByTestId(`demo-catalog-filter-checkbox-${filterFillers[3].valueName}`));
    await userEvent.selectOptions(screen.getByTestId('demo-catalog-filter-select'), sortingOptions[0].key);
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowLeft}');
    await act(async () => {
      await userEvent.click(applyButton);
    });
    // tests on the rest of radio-buttons
    await userEvent.click(screen.getByTestId(`demo-catalog-filter-radio-${filterFatContent[1].valueName}`));
    await act(async () => {
      await userEvent.click(applyButton);
    });

    await userEvent.click(screen.getByTestId(`demo-catalog-filter-radio-${filterFatContent[0].valueName}`));
    await act(async () => {
      await userEvent.click(applyButton);
    });
  });
});
