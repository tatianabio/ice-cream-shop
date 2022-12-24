import React, { useEffect } from 'react';
import './FeedbackTile.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormSubmit from '../../utils/useFormSubmit';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import { ISubscriptionForm } from '../../organisms/SubscriptionSection/SubscriptionSection';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';
import TextareaControl from '../../_formControls/TextareaControl';

interface IFeedbackTile {
  setOpenModal?: (isOpened: boolean) => void;
  /** Technical attributes */
  'data-testid': string;
}

export interface IFeedbackForm {
  name: string;
  email: string;
  feedback: string;
}

const FeedbackTile = ({ 'data-testid': testId, setOpenModal }: IFeedbackTile) => {
  const { t } = useTranslation();
  const { sendData, loading, isSuccessful } = useFormSubmit('feedbackForm');

  const schema = object({
    name: string().required('requiredField'),
    email: string().required('requiredField').email('incorrectEmail'),
    feedback: string().required('requiredField'),
  });

  const form = useForm<IFeedbackForm>({
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useEffect(() => {
    !loading && isSuccessful === false && sendMessageToDisplay('errorMessage', 'error');
    if (!loading && isSuccessful === true) {
      sendMessageToDisplay('successfulSubmission');
      form.reset();
      setOpenModal?.(false);
    }
  }, [loading, isSuccessful]);

  const onSubmit = async (data: ISubscriptionForm) => {
    await sendData(data);
  };

  return (
    <section className='feedback' data-testid={`${testId}-feedback`}>
      <h2 className='feedback__title'>{t('feedbackFormTitle')}</h2>
      <FormProvider {...form}>
        <form className='feedback__form' onSubmit={form.handleSubmit(onSubmit)}>
          <InputControl
            formField={{
              name: 'name',
              label: `${t('nameAndSurname')}`,
              hasTooltip: false,
              isLabelHidden: true,
              className: 'feedback__input-control',
            }}
            type='text'
            data-testid={`${testId}-name`}
            placeholder={`${t('nameAndSurname')}`}
          />
          <InputControl
            formField={{
              name: 'email',
              label: 'email',
              hasTooltip: false,
              isLabelHidden: true,
              className: 'feedback__input-control',
            }}
            type='email'
            data-testid={`${testId}-email`}
            placeholder='email@example.com'
          />
          <TextareaControl
            data-testid={testId}
            formField={{
              name: 'feedback',
              label: 'Written feedback',
              className: 'feedback__input-control',
              isLabelHidden: true,
              hasTooltip: false,
            }}
            placeholder={`${t('freeForm')}`}
          />
          <Button
            className='feedback__submit-button'
            data-testid={testId}
            text={`${t('sendButton')}`}
            variant='secondary'
            type='submit'
            loading={loading}
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default FeedbackTile;
