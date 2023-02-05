import React, { ReactElement } from 'react';
import Header from '../../organisms/Header';
import basicNavigation from '../../organisms/Header/utils';
import Footer from '../../organisms/Footer';

interface IPage {
  /** Content of the page */
  children: ReactElement;
  /** Technical attributes */
  'data-testid': string;
}

const Page = ({ 'data-testid': testId, children }: IPage) => {
  return (
    <div className='page-container' data-testid={`${testId}-page-container`}>
      <Header basicNavigationArray={basicNavigation} data-testid={testId} />
      {children}
      <Footer data-testid={testId} />
    </div>
  );
};

export default Page;
