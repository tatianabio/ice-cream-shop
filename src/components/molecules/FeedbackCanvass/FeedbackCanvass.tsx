import React from 'react';
import { useTranslation } from 'react-i18next';

interface IFeedbackCanvass {
  /** Technical attributes */
  'data-testid': string;
}

export interface IFeedbackForm {
  name: string;
  email: string;
  feedback: string;
}

const FeedbackCanvass = ({ 'data-testid': testId }: IFeedbackCanvass) => {
  const { t } = useTranslation();
  return (
    <section className='feedback-form' data-testid={`${testId}-feedback-form`}>
      <h2 className='feedback-form__title'>{t('')}</h2>
    </section>
  );
};

export default FeedbackCanvass;
