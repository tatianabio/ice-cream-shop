import { action } from '@storybook/addon-actions';
import globalMswHandlers from '../../../mock/mswHandlers';
import OfferSection from './OfferSection';
import StoryContainer from '../../utils/StoryContainer';
import { IIceCreamOffer } from '../../../mock/data/iceCreamOffers';

export default {
  title: 'Components/Organisms/OfferSection',
  component: OfferSection,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8090%3A3382&t=gINcRYaw8x2Y36Zt-4',
    },
  },
};

interface IDemo {
  onClickTest?: (offer: IIceCreamOffer) => void;
}

export const Demo = ({ onClickTest }: IDemo) => {
  const buttonOnClick = (offer: IIceCreamOffer) => {
    onClickTest ? onClickTest(offer) : action('Add to cart')(offer);
  };

  return (
    <StoryContainer
      title='Offer Section'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '30px' }}
    >
      <OfferSection data-testid='demo' addToCart={buttonOnClick} />
    </StoryContainer>
  );
};
