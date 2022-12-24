import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicModal from './BasicModal';

const TestComponent = () => {
  return (
    <BasicModal data-testid='demo' openingButtonText='Open modal'>
      <div>
        <h2>Test modal</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </BasicModal>
  );
};

describe('Basic Modal Tests', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });

  it('render', async () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-modal-container')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('demo-opening-button'));
    expect(screen.getByTestId('demo-modal-content')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('demo-close-button'));
    expect(screen.queryByTestId('demo-modal-content')).not.toBeInTheDocument();
  });
});
