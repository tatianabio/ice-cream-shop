import { render, screen } from '@testing-library/react';
import { Demo } from './CheckGroupControl.stories';

describe('CheckGroupControl tests', () => {
  it('render', () => {
    render(<Demo />);
    expect(screen.getByTestId('fat-content-form-field')).toBeInTheDocument();
    expect(screen.getByTestId('fillers-form-field')).toBeInTheDocument();
  });
});
