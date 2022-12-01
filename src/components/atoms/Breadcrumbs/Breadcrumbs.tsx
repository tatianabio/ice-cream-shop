import React from 'react';
import './Breadcrumbs.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export interface IBreadcrumb {
  /** Displayed name of the breadcrumb */
  name: string;
  /** Link of the breadcrumb */
  link: string;
  /** Is this breadcrumb active (represent the current page)? */
  isActive: boolean;
}

interface IBreadcrumbs {
  /** Breadcrumbs List Data for a page */
  breadcrumbsArray: IBreadcrumb[];
}

const Breadcrumbs = ({ breadcrumbsArray }: IBreadcrumbs) => {
  const { t } = useTranslation();
  const breadcrumbsList = breadcrumbsArray.map((item) => {
    const { name, link, isActive } = item;
    return (
      <li key={name} className={cx('breadcrumb')}>
        <Link
          className={cx('breadcrumb__link', isActive && 'breadcrumb__link--active')}
          to={link}
          tabIndex={isActive ? -1 : undefined}
        >
          {t(name)}
        </Link>
      </li>
    );
  });

  return <ul className='breadcrumbs'>{breadcrumbsList}</ul>;
};

export default Breadcrumbs;
