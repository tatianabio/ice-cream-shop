import React from 'react';
import './Breadcrumbs.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export interface IBreadcrumb {
  name: string;
  link: string;
  isActive: boolean;
}

interface IBreadcrumbs {
  breadcrumbsArray: IBreadcrumb[];
}

export const breadcrumbsCatalog: IBreadcrumb[] = [
  {
    name: 'main',
    link: '/main',
    isActive: false,
  },
  {
    name: 'catalog',
    link: '/catalog',
    isActive: true,
  },
];

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
