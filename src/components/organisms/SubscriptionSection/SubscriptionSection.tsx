import React from 'react';
import './SubscriptionSection.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';

interface ISubscriptionSection {
  /** Technical attributes */
  'data-testid': string;
}

interface ISubscriptionForm {
  email: string;
}

const SubscriptionSection = ({ 'data-testid': testId }: ISubscriptionSection) => {
  const { t } = useTranslation();

  const schema = object({
    email: string()
      .required(`${t('requiredField')}`)
      .email(`${t('incorrectEmail')}`),
  });

  const form = useForm<ISubscriptionForm>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: ISubscriptionForm) => {
    action('onSubmit')(data);
  };

  return (
    <section className='subscription-section' data-testid={`${testId}-subscription-section`}>
      <div className='subscription-section__container'>
        <h2 className='visually-hidden'>{t('subscriptionTitle')}</h2>
        <p className='subscription-section__description'>{t('subscriptionDescription')}</p>
        <FormProvider {...form}>
          <form className='subscription-section__form' onSubmit={handleSubmit(onSubmit)}>
            <InputControl
              className='subscription-section__input-control'
              formField={{
                name: 'email',
                label: 'email',
                hasTooltip: false,
                isLabelHidden: true,
              }}
              type='email'
              data-testid={testId}
              placeholder='email@example.com'
            />
            <Button
              className='subscription-section__submit-button'
              data-testid={`${testId}-button`}
              text={`${t('sendButton')}`}
              variant='secondary'
              type='submit'
            />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SubscriptionSection;
