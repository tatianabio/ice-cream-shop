import { useTranslation } from 'react-i18next';
import StoryContainer from '../../storybookUtils/StoryContainer';
import LangToggle from './LangToggle';

export default {
  title: 'Components/Atoms/LangToggle',
  component: LangToggle,
};

export const Demo = () => {
  const { t } = useTranslation();
  return (
    <StoryContainer
      title='Language Toggle'
      text='Displayed demo paragraph is not included in the Lang Toggle component'
      style={{ maxWidth: '400px', minHeight: '500px', paddingLeft: '30px' }}
    >
      <>
        <LangToggle data-testid='demo' />
        <p>{t('benefitsTitle')}</p>
      </>
    </StoryContainer>
  );
};
