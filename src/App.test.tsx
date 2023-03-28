import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('render', () => {
    render(<App />);
    expect(screen.getByTestId('app-page-container')).toBeInTheDocument();
  });
});
