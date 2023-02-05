import React from 'react';
import './App.scss';
import GlobalMessage from './components/atoms/GlobalMessage';
import Page from './components/pages/Page';
import MainPage from './components/pages/MainPage';

// TODO include images/server, router and Catalog page, check the tablet and mobile version, check header menu in the mobile

function App() {
  return (
    <>
      <GlobalMessage data-testid='app' />
      <Page data-testid='app'>
        <MainPage data-testid='app' />
      </Page>
    </>
  );
}

export default App;
