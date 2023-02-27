import React from 'react';
import './CatalogFilter.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import sortingOptions, { IOption } from '../../atoms/Select/utils';
import SelectControl from '../../_formControls/SelectControl';
import Button from '../../atoms/Button';
import RangeSliderControl from '../../_formControls/RangeSliderControl';
import { filterFatContent, filterFillers, ICheckItem } from '../../atoms/CheckGroup/utils';
import CheckGroupControl from '../../_formControls/CheckGroupControl/CheckGroupControl';

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
  const form = useForm<ICatalogFilterForm>({
    defaultValues: {
      sorting: sortingOptions[0],
      price: [4, 9],
      fatContent: [filterFatContent[1]],
      fillers: [filterFillers[0], filterFillers[1]],
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: ICatalogFilterForm) => {
    action('onSubmit')(data);
    form.reset();
  };

  return (
    <section className='catalog-filter'>
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
            inputType='checkbox'
          />

          <Button data-testid={testId} text='applyFilters' variant='thirdly' type='submit' />
        </form>
      </FormProvider>
    </section>
  );
};

export default CatalogFilter;
