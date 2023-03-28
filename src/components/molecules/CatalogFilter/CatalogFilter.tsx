import React from 'react';
import './CatalogFilter.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import { shallow } from 'zustand/shallow';
import sortingOptions, { IOption } from '../../atoms/Select/utils';
import SelectControl from '../../_formControls/SelectControl';
import Button from '../../atoms/Button';
import RangeSliderControl from '../../_formControls/RangeSliderControl';
import { filterFatContent, filterFillers, ICheckItem } from '../../atoms/CheckGroup/utils';
import CheckGroupControl from '../../_formControls/CheckGroupControl/CheckGroupControl';
import useCatalogFilterStore, { ICatalogFilterStore } from './CatalogFilter.store';

interface ICatalogFilter {
  /** Technical attributes */
  'data-testid': string;
}

interface ICatalogFilterForm {
  sorting: IOption;
  price: number[];
  fatContent: ICheckItem[];
  fillers: ICheckItem[];
}

const CatalogFilter = ({ 'data-testid': testId }: ICatalogFilter) => {
  const { selectedOrder, selectedFillers, selectedFatContent, selectedPriceRange } = useCatalogFilterStore(
    (store: ICatalogFilterStore) => store.filterSettings,
    shallow
  );

  const defaultSortingOption = sortingOptions.find((item) => item.key === selectedOrder);
  const defaultFatContent = filterFatContent.find((item) => item.valueName === selectedFatContent);
  const defaultFilers = selectedFillers.reduce((acc, selectedFiller) => {
    const filler = filterFillers.find((item) => item.valueName === selectedFiller);
    return filler ? [...acc, filler] : acc;
  }, [] as ICheckItem[]);

  const form = useForm<ICatalogFilterForm>({
    defaultValues: {
      sorting: defaultSortingOption,
      price: selectedPriceRange,
      fatContent: [defaultFatContent],
      fillers: defaultFilers,
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  const setFilteredProductList = useCatalogFilterStore((store) => store.setFilteredProductList, shallow);
  const setSortingOrder = useCatalogFilterStore((store) => store.setSortingOrder, shallow);
  const setPriceRange = useCatalogFilterStore((store) => store.setPriceRange, shallow);
  const setFatContent = useCatalogFilterStore((store) => store.setFatContent, shallow);
  const setFillers = useCatalogFilterStore((store) => store.setFillers, shallow);

  const onSubmit = (data: ICatalogFilterForm) => {
    action('onSubmit')(data);
    setFilteredProductList();
  };

  return (
    <div className='catalog-filter' data-testid={`${testId}-catalog-filter`}>
      <FormProvider {...form}>
        <form className='catalog-filter__form' onSubmit={handleSubmit(onSubmit)}>
          <SelectControl
            data-testid={testId}
            formField={{
              name: 'sorting',
              label: 'sorting',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
            optionsList={sortingOptions}
            selectLabel='sorting'
            onChange={(option: IOption) => {
              setSortingOrder(option.key);
            }}
          />
          <RangeSliderControl
            data-testid={testId}
            measurementUnits='$'
            formField={{
              name: 'price',
              label: 'price',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
            onChange={(range) => {
              setPriceRange(range);
            }}
          />
          <CheckGroupControl
            checkGroup={filterFatContent}
            data-testid={testId}
            formField={{
              name: 'fatContent',
              label: 'fatContent',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
            onChange={(checked) => setFatContent(checked[0].valueName)}
            inputType='radio'
          />
          <CheckGroupControl
            checkGroup={filterFillers}
            data-testid={testId}
            formField={{
              name: 'fillers',
              label: 'fillers',
              hasTooltip: false,
              isLabelHidden: false,
              isLabelBold: false,
              hasErrorMessage: false,
            }}
            onChange={(checked) => {
              setFillers(checked.map((item) => item.valueName));
            }}
            inputType='checkbox'
          />

          <Button data-testid={testId} text='applyFilters' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </div>
  );
};

export default CatalogFilter;
