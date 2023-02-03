import React from 'react';
import './MainPage.scss';

interface IMainPage {
  /** Technical attributes */
  'data-testid': string;
}

const MainPage = ({ 'data-testid': testId }: IMainPage) => {
  return <main className='main-page' data-testid={`${testId}-main-page`} />;
};

export default MainPage;
