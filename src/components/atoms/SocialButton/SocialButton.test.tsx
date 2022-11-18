import { Demo } from './SocialButton.stories';
import { render, screen } from '@testing-library/react';
import { ISocial, socialNetworks } from './SocialButton';

describe('SocialButton Tests', () => {
  beforeEach(() => {
    render(<Demo />);
  });
  it('SocialButton render', () => {
    for (const key in socialNetworks) {
      expect(screen.getByTestId(`${key}-icon`)).toBeInTheDocument();
      expect(screen.getByTestId(`${key}-link`)).toHaveAttribute(
        'href',
        socialNetworks[key as ISocial].link
      );
    }
  });
});
