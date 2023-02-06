import React from 'react';
import { RouterProvider } from 'react-router-dom';
import GlobalMessage from './components/atoms/GlobalMessage';
import router from './router';
import useMSW from './components/utils/useMSW';

// TODO include images/server, router and Catalog page, check the tablet and mobile version, check header menu in the mobile

function App() {
  const isLoading = useMSW();
  if (!isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <GlobalMessage data-testid='app' />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
