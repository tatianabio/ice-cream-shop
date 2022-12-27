import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import SocialMedia from '../../molecules/SocialMedia';
import LogoHtmlAcademy from '../../../assets/svg/logo-html-academy';

interface IFooter {
  /** Technical attributes */
  'data-testid': string;
}

const Footer = ({ 'data-testid': testId }: IFooter) => {
  const { t } = useTranslation();
  return (
    <footer className='footer' data-testid={`${testId}-footer`}>
      <h2 className='visually-hidden'>{t('footerTitle')}</h2>
      <SocialMedia className='footer__social-media' />

      <h3 className='visually-hidden'>{t('infoList')}</h3>
      <ul className='footer__info-list'>
        <li className='footer__info-item footer__info-item--highlighted'>
          <a href='https://www.google.com/' className='footer__info-link'>
            {t('forPartners')}
          </a>
        </li>
        <li className='footer__info-item'>
          <a href='https://www.google.com/' className='footer__info-link'>
            {t('ourDocuments')}
          </a>
        </li>
        <li className='footer__info-item'>
          {/* TODO: probably, insert router instead of google links */}
          <a href='https://www.google.com/' className='footer__info-link'>
            {t('aboutManufacture')}
          </a>
        </li>
        <li className='footer__info-item'>
          <a href='https://www.google.com/' className='footer__info-link'>
            {t('ecoStandards')}
          </a>
        </li>
      </ul>

      <a href='https://htmlacademy.ru/about' className='footer__copyright-link' target='_blank' rel='noreferrer'>
        <LogoHtmlAcademy />
        <p className='footer__copyright-text'>{t('htmlAcademyDesign')}</p>
      </a>
    </footer>
  );
};

export default Footer;
