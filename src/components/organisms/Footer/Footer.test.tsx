import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer Tests', () => {
  it('render', () => {
    render(<Footer data-testid='demo' />);
    expect(screen.getByTestId('demo-footer')).toBeInTheDocument();
  });
});
