import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

interface ISectionTile {
  /** The content of the popup */
  title: string;
  /** The content of the popup */
  children: ReactElement;
  /** Technical attributes */
  'data-testid': string;
}

const SectionTile = ({ 'data-testid': testId, children, title }: ISectionTile) => {
  const { t } = useTranslation();
  return (
    <section className='section' data-testid={`${testId}-section`}>
      <h2 className='section__title'>{t(`${title}`)}</h2>
      {children}
    </section>
  );
};

export default SectionTile;
