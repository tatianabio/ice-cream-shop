import React, { useCallback, useRef, useState } from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import GllacyLogo from '../../atoms/GllacyLogo';
import Cross from '../../../assets/svg/cross';
import ToggleMenu from '../../../assets/svg/toggle-menu';

export interface IBasicNavigationItem {
  /** Displayed name of the navigation item */
  name: string;
  /** Link of the navigation item */
  link: string;
}

interface IHeader {
  /** Basic Navigation List Data for a page */
  basicNavigationArray: IBasicNavigationItem[];
  /** Technical attributes */
  'data-testid': string;
}

const Header = ({ basicNavigationArray, 'data-testid': testId }: IHeader) => {
  const { t } = useTranslation();

  const headerRef = useRef<HTMLHeadElement>(null);

  const [isClosed, setIsClosed] = useState(true);

  const toggleMenuButtonText = isClosed ? t('toggleOpenMenu') : t('toggleCloseMenu');

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `navigation__link ${isActive ? 'navigation__link--active' : ''}`;

  const onNavigationToggleHandler = useCallback(() => setIsClosed(!isClosed), [isClosed]);

  const basicNavigation = basicNavigationArray.map((item) => {
    const { name, link } = item;
    return (
      <li key={name} className={cx('navigation__basic-item')}>
        <NavLink className={linkClassName} to={link} onClick={onNavigationToggleHandler}>
          {t(name)}
        </NavLink>
      </li>
    );
  });

  return (
    <header className='header' ref={headerRef}>
      <GllacyLogo data-testid={testId} />
      <nav className={cx('header__navigation', 'navigation', isClosed && 'navigation--closed')}>
        <button className='navigation__toggle' type='button' onClick={onNavigationToggleHandler}>
          <span className='visually-hidden'>{toggleMenuButtonText}</span>
          {!isClosed && <Cross />}
          {isClosed && <ToggleMenu />}
        </button>
        <div className='navigation__container' style={{ top: headerRef.current?.clientHeight || 0 }}>
          <ul className='navigation__basic-list'>{basicNavigation}</ul>
          <a href='tel:+1111111111' className='navigation__phone'>
            +1-111-111-111
          </a>
          <ul className='navigation__user-list' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
