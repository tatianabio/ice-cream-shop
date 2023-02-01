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

const SectionTile = () => {
  const { t } = useTranslation();
  return (
    <section className='section'>
      <h2 className='section__title'>{t('')}</h2>
    </section>
  );
};

export default SectionTile;
