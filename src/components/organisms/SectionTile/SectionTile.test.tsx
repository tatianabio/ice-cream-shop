import { render, screen } from '@testing-library/react';
import SectionTile from './SectionTile';

const TestComponent = () => {
  return (
    <SectionTile data-testid='demo' title='Test section'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Quam nulla porttitor
        massa id neque aliquam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
        Ipsum consequat nisl vel pretium lectus quam id leo in. Amet facilisis magna etiam tempor. Eros in cursus turpis
        massa.
      </p>
    </SectionTile>
  );
};

describe('Section Tile Tests', () => {
  it('render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-section')).toBeInTheDocument();
  });
});
