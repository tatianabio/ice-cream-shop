import React, { useEffect } from 'react';
import './DeliverySection.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormSubmit from '../../utils/useFormSubmit';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';

interface IDeliverySection {
  /** Technical attributes */
  'data-testid': string;
}

export interface IDeliveryForm {
  date: string;
  phone: string;
  address: string;
}

const DeliverySection = ({ 'data-testid': testId }: IDeliverySection) => {
  const { t } = useTranslation();
  const { sendData, loading, isSuccessful } = useFormSubmit('deliveryForm');

  const schema = object({
    date: string().required('requiredField'),
    phone: string().required('requiredField'),
    address: string().required('requiredField'),
  });

  const form = useForm<IDeliveryForm>({
    defaultValues: {
      date: '',
      phone: '',
      address: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useEffect(() => {
    !loading && isSuccessful === false && sendMessageToDisplay('errorMessage', 'error');
    if (!loading && isSuccessful === true) {
      sendMessageToDisplay('successfulSubmission');
      form.reset();
    }
  }, [loading, isSuccessful]);

  const onSubmit = async (data: IDeliveryForm) => {
    await sendData(data);
  };

  return (
    <section className='delivery' data-testid={`${testId}-delivery-section`}>
      <div className='delivery__info-container'>
        <h2 className='delivery__title'>{t('deliverySectionTitle')}</h2>
        <p className='delivery__info'>{t('deliverySectionInfo')}</p>
      </div>
      <div className='delivery__form-container'>
        <h3 className='delivery__form-title'>{t('deliveryFormTitle')}</h3>
        <FormProvider {...form}>
          <form className='delivery__form' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='delivery__form-date-wrapper'>
              <InputControl
                formField={{
                  name: 'date',
                  label: `${t('deliveryFormDate')}`,
                  hasTooltip: true,
                  isLabelHidden: false,
                  className: 'delivery__input-control delivery__input-control--date',
                  tooltipText: `${t('deliveryFormDateInfo')}`,
                }}
                type='text'
                data-testid={`${testId}-date`}
                placeholder='01.04.2020'
              />
              <InputControl
                formField={{
                  name: 'phone',
                  label: `${t('deliveryFormPhone')}`,
                  hasTooltip: false,
                  isLabelHidden: false,
                  className: 'delivery__input-control delivery__input-control--phone',
                }}
                type='text'
                data-testid={`${testId}-phone`}
                placeholder='+1(000)000-000'
              />
            </div>
            <InputControl
              formField={{
                name: 'address',
                label: `${t('deliveryFormAddress')}`,
                hasTooltip: true,
                isLabelHidden: false,
                className: 'delivery__input-control',
                tooltipText: `${t('deliveryFormAddressInfo')}`,
              }}
              type='text'
              data-testid={`${testId}-address`}
              placeholder={`${t('deliveryFormAddressPlaceholder')}`}
            />
            <Button
              className='delivery__submit-button'
              data-testid={testId}
              text={`${t('sendButton')}`}
              variant='secondary'
              type='submit'
              loading={loading}
            />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default DeliverySection;
