import StoryContainer from '../../storybookUtils/StoryContainer';
import Popup from './Popup';
import Cart from '../../../assets/svg/cart';

export default {
  title: 'Components/Organisms/Popup',
  component: Popup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8019%3A3377&t=tuUscdwv8NJYEpZI-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Popup'
      style={{ maxWidth: '1200px', minHeight: '2000px', height: 'min-content', padding: '5px' }}
    >
      <Popup data-testid='demo' openingButtonText='Open popup' openingButtonIcon={<Cart />}>
        <div>
          <h2>Test popup</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Quam nulla
            porttitor massa id neque aliquam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend
            donec pretium. Ipsum consequat nisl vel pretium lectus quam id leo in. Amet facilisis magna etiam tempor.
            Eros in cursus turpis massa.
          </p>
        </div>
      </Popup>
    </StoryContainer>
  );
};
