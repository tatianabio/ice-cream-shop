import React, { useEffect } from 'react';
import './SubscriptionSection.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import useFormSubmit from '../../utils/useFormSubmit';

interface ISubscriptionSection {
  /** Technical attributes */
  'data-testid': string;
}

export interface ISubscriptionForm {
  email: string;
}

const SubscriptionSection = ({ 'data-testid': testId }: ISubscriptionSection) => {
  const { t } = useTranslation();
  const { sendData, loading, isSuccessful } = useFormSubmit('subscriptionForm');

  const schema = object({
    email: string().required('requiredField').email('incorrectEmail'),
  });

  const form = useForm<ISubscriptionForm>({
    defaultValues: {
      email: '',
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

  const onSubmit = async (data: ISubscriptionForm) => {
    await sendData(data);
  };

  return (
    <section className='subscription' data-testid={`${testId}-subscription`}>
      <div className='subscription__container'>
        <h2 className='visually-hidden'>{t('subscriptionTitle')}</h2>
        <p className='subscription__description'>{t('subscriptionDescription')}</p>
        <FormProvider {...form}>
          <form className='subscription__form' onSubmit={form.handleSubmit(onSubmit)}>
            <InputControl
              formField={{
                name: 'email',
                label: 'email',
                hasTooltip: false,
                isLabelHidden: true,
                className: 'subscription__input-control',
              }}
              type='email'
              data-testid={testId}
              placeholder='email@example.com'
            />
            <Button
              className='subscription__submit-button'
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

export default SubscriptionSection;
