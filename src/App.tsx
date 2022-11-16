import React from 'react';
import './App.scss';
import SocialButton from './components/atoms/SocialButton';
import SocialTelegram from './assets/svg/social-telegram';

function App() {
  return (
    <div className='App'>
      <SocialButton />
      <SocialTelegram />
    </div>
  );
}

export default App;
