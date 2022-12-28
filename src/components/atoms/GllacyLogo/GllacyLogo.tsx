import React from 'react';
import './GllacyLogo.scss';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Gllacy from '../../../assets/svg/gllacy';

interface IGllacyLogo {
  /** Technical attributes */
  'data-testid': string;
  className?: string;
}

const GllacyLogo = ({ className, 'data-testid': testId }: IGllacyLogo) => {
  return (
    <Link className={cx('gllacy-logo', className)} data-testid={`${testId}-gllacy-logo`} to='/main'>
      <Gllacy />
    </Link>
  );
};

export default GllacyLogo;
