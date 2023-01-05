import React, { useEffect } from 'react';
import './SignInTile.scss';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormSubmit from '../../utils/useFormSubmit';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import InputControl from '../../_formControls/InputControl';
import Button from '../../atoms/Button';

interface ISignInTile {
  setOpenModal?: (isOpened: boolean) => void;
  /** Technical attributes */
  'data-testid': string;
}

export interface ISignInForm {
  email: string;
  password: string;
}

const SignInTile = ({ 'data-testid': testId, setOpenModal }: ISignInTile) => {
  const { t } = useTranslation();
  const { sendData, loading, isSuccessful } = useFormSubmit('signIn');

  const schema = object({
    email: string().required('requiredField').email('incorrectEmail'),
    password: string().required('requiredField'),
  });

  const form = useForm<ISignInForm>({
    defaultValues: {
      email: 'email@example.com',
      password: '123456',
    },
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useEffect(() => {
    !loading && isSuccessful === false && sendMessageToDisplay('incorrectSignInDetails', 'error');
    if (!loading && isSuccessful === true) {
      sendMessageToDisplay('successfulSubmission');
      form.reset();
      setOpenModal?.(false);
    }
  }, [loading, isSuccessful]);

  const onSubmit = async (data: ISignInForm) => {
    await sendData(data);
  };

  return (
    <section className='sign-in' data-testid={`${testId}-sign-in`}>
      <h2 className='sign-in__title'>{t('signInFormTitle')}</h2>
      <FormProvider {...form}>
        <form className='sign-in__form' onSubmit={form.handleSubmit(onSubmit)}>
          <InputControl
            formField={{
              name: 'email',
              label: 'email',
              hasTooltip: false,
              isLabelHidden: true,
              className: 'sign-in__input-control',
            }}
            type='email'
            data-testid={`${testId}-email`}
            placeholder='email@example.com'
          />
          <InputControl
            formField={{
              name: 'password',
              label: 'password',
              hasTooltip: false,
              isLabelHidden: true,
              className: 'sign-in__input-control',
            }}
            type='password'
            data-testid={`${testId}-password`}
            placeholder='password'
          />
          <div className='sign-in__submit-button-wrapper'>
            <Button
              className='sign-in__submit-button'
              data-testid={testId}
              text={`${t('signInButton')}`}
              variant='secondary'
              type='submit'
              loading={loading}
            />
            <div className='sign-in__links-wrapper'>
              <a href='https://www.google.com/' className='sign-in__link'>
                {t('forgotPasswordLink')}
              </a>
              <a href='https://www.google.com/' className='sign-in__link'>
                {t('signUpLink')}
              </a>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default SignInTile;
