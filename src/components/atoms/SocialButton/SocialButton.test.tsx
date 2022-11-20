import { render, screen } from '@testing-library/react';
import { Demo } from './SocialButton.stories';
import { ISocial, socialNetworks } from './SocialButton';

describe('Social button Tests', () => {
  beforeEach(() => {
    render(<Demo />);
  });
  it('Social button render', () => {
    for (const key in socialNetworks) {
      expect(screen.getByTestId(`${key}-icon`)).toBeInTheDocument();
      expect(screen.getByTestId(`${key}-link`)).toHaveAttribute(
        'href',
        socialNetworks[key as ISocial].link
      );
    }
  });
});
