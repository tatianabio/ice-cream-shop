import { render, screen } from '@testing-library/react';
import SocialMedia from './SocialMedia';

describe('Social Media List Tests', () => {
  it('should render', () => {
    render(<SocialMedia />);
    expect(screen.getByTestId('social-vkontakte')).toBeInTheDocument();
    expect(screen.getByTestId('social-youtube')).toBeInTheDocument();
    expect(screen.getByTestId('social-telegram')).toBeInTheDocument();
  });
});
