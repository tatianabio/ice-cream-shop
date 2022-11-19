import { render, screen } from '@testing-library/react';
import { Demo } from './SocialButton.stories';
import { ISocial, socialNetworks } from './SocialButton';

describe('Button Tests', () => {
  beforeEach(() => {
    render(<Demo />);
  });
  it('Button render', () => {
    for (const key in socialNetworks) {
      expect(screen.getByTestId(`${key}-icon`)).toBeInTheDocument();
      expect(screen.getByTestId(`${key}-link`)).toHaveAttribute(
        'href',
        socialNetworks[key as ISocial].link
      );
    }
  });
});
