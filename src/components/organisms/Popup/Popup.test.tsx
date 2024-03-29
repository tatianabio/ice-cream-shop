import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';
import Cart from '../../../assets/svg/cart';

const TestComponent = () => {
  return (
    <Popup data-testid='demo' openingButtonIcon={<Cart />} openingButtonText='Open popup'>
      <div>
        <h2>Test popup</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </Popup>
  );
};

describe('Popup Tests', () => {
  it('opening and closing popup by clicking outside', async () => {
    render(<TestComponent />);
    await userEvent.click(screen.getByTestId('demo-opening'));
    expect(screen.getByTestId('demo-popup')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('demo-opening'));
    expect(screen.getByTestId('demo-popup')).toBeInTheDocument();
    await userEvent.click(document.body);
    expect(screen.queryByTestId('demo-popup')).toBeNull();
  });

  it('closing popup by pressing Escape', async () => {
    render(<TestComponent />);
    await userEvent.click(screen.getByTestId('demo-opening'));
    expect(screen.getByTestId('demo-popup')).toBeInTheDocument();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByTestId('demo-popup')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByTestId('demo-popup')).toBeNull();
  });
});
