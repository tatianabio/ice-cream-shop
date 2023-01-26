import React from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import Cart from './assets/svg/cart';
import Popup from './components/organisms/Popup';

function App() {
  const { t } = useTranslation();

  return (
    <Popup data-testid='demo' openingButtonText='Open popup' openingButtonIcon={<Cart />}>
      <div>
        <h2>Test popup</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Quam nulla
          porttitor massa id neque aliquam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium. Ipsum consequat nisl vel pretium lectus quam id leo in. Amet facilisis magna etiam tempor. Eros in
          cursus turpis massa.
        </p>
      </div>
    </Popup>
  );
}

export default App;
