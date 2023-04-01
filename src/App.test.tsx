import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

jest.mock('msw', () => ({
  setupWorker: () => ({
    start: jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve(true);
        })
    ),
    stop: jest.fn(),
  }),
}));
describe('App tests', () => {
  it('successful render', async () => {
    render(<App />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByText('Loading'));
    expect(await screen.findByTestId('app-page-container')).toBeInTheDocument();
  });
});
