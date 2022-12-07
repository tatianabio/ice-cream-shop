import { action } from '@storybook/addon-actions';
import globalMswHandlers from '../../../mock/mswHandlers';
import StoryContainer from '../../utils/StoryContainer';
import OfferTile from './OfferTile';
import { IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

export default {
  title: 'Components/Atoms/OfferTile',
  component: OfferTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8106%3A3413&t=TpyayA2VWlWug5yU-4',
    },
  },
};

interface IDemo {
  onClickTest?: (theme: IIceCreamTheme) => void;
}

export const Demo = ({ onClickTest }: IDemo) => {
  const buttonOnClick = (theme: IIceCreamTheme) => {
    onClickTest ? onClickTest(theme) : action('Add to cart')(theme);
  };

  return (
    <StoryContainer title='Offer Tile'>
      <OfferTile addToCart={buttonOnClick} data-testid='demo' />
    </StoryContainer>
  );
};
