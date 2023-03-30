import { render, screen } from '@testing-library/react';
import App from './App';
import * as testUseMSW from './components/utils/useMSW';

describe('App tests', () => {
  it('successful render', () => {
    jest.spyOn(testUseMSW, 'default').mockImplementation(() => true);
    render(<App />);
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('app-page-container')).toBeInTheDocument();
  });
  it('failed render', () => {
    jest.spyOn(testUseMSW, 'default').mockImplementation(() => false);
    render(<App />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
