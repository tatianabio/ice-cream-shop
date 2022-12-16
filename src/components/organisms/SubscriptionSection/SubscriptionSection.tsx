import React, { useEffect } from 'react';
import './SubscriptionSection.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { action } from '@storybook/addon-actions';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';
import useSubscriptionForm from './useSubscriptionForm';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';

interface ISubscriptionSection {
  /** Technical attributes */
  'data-testid': string;
}

export interface ISubscriptionForm {
  email: string;
}

const SubscriptionSection = ({ 'data-testid': testId }: ISubscriptionSection) => {
  const { t } = useTranslation();
  const { sendData, loading, isSucceed } = useSubscriptionForm();

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

  useEffect(() => {
    !loading && isSucceed === false && sendMessageToDisplay('errorMessage', 'error');
    if (!loading && isSucceed === true) {
      sendMessageToDisplay('successfulSubmission');
      form.reset();
    }
  }, [loading, isSucceed]);

  const onSubmit = async (data: ISubscriptionForm) => {
    action('onSubmit')(data);
    await sendData(data);
  };

  return (
    <section className='subscription-section' data-testid={`${testId}-subscription-section`}>
      <div className='subscription-section__container'>
        <h2 className='visually-hidden'>{t('subscriptionTitle')}</h2>
        <p className='subscription-section__description'>{t('subscriptionDescription')}</p>
        <FormProvider {...form}>
          <form className='subscription-section__form' onSubmit={form.handleSubmit(onSubmit)}>
            <InputControl
              formField={{
                name: 'email',
                label: 'email',
                hasTooltip: false,
                isLabelHidden: true,
                className: 'subscription-section__input-control',
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
              loading={loading}
            />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SubscriptionSection;
