import React from 'react';
import { useTranslation } from 'react-i18next';

interface IBulletPagination {
  /** The array of items which represented in bullets of the pagination */
  array: [];
  /** Technical attributes */
  'data-testid': string;
}

const BulletPagination = ({ array, 'data-testid': testId }: IBulletPagination) => {
  const { t } = useTranslation();
  const bulletsList = array.map((_, index) => {
    return (
      <li className='bullet-item' data-testid={`${testId}-bullet-item-${index}`}>
        <button className='bullet-item__button' data-testid={`${testId}-bullet-item-button-${index}`}>
          {t('')}
        </button>
      </li>
    );
  });

  return (
    <ul className='bullet-list' data-testid={`${testId}-bullet-list`}>
      {bulletsList}
    </ul>
  );
};

export default BulletPagination;
