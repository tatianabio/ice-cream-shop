import React, { useCallback, useRef, useState } from 'react';
import './Header.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import GllacyLogo from '../../atoms/GllacyLogo';

export interface IBasicNavigationItem {
  /** Displayed name of the navigation item */
  name: string;
  /** Link of the navigation item */
  link: string;
  /** Is this navigation item active (represent the current page)? */
  isActive: boolean;
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

  const onClickHandler = useCallback(() => setIsClosed(!isClosed), [isClosed]);

  const basicNavigation = basicNavigationArray.map((item) => {
    const { name, link, isActive } = item;
    return (
      <li key={name} className={cx('navigation__basic-item')}>
        <Link
          className={cx('navigation__link', isActive && 'navigation__link--active')}
          to={link}
          tabIndex={isActive ? -1 : undefined}
        >
          {t(name)}
        </Link>
      </li>
    );
  });

  return (
    <header className='header' ref={headerRef}>
      <GllacyLogo data-testid={testId} />
      <nav className={cx('header__navigation', 'navigation', isClosed && 'navigation--closed')}>
        <button className='navigation__toggle' type='button' onClick={onClickHandler}>
          <span className='visually-hidden'>{t('')}</span>
        </button>
        <div className='navigation__container' style={{ top: headerRef.current?.clientHeight || 0 }}>
          <ul className='navigation__basic-list'>{basicNavigation}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
