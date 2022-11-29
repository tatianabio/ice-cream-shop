import GiftTile from './GiftTile';
import globalMswHandlers from '../../../mock/mswHandlers';
import { gifts } from '../../../mock/data/gifts';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Molecules/GiftTile',
  component: GiftTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7577%3A3215&t=EFakbzunBTtRPtZM-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Two gift tiles as examples'>
      <>
        <GiftTile data-testid='raspberry-gift' data={gifts[0]} />
        <GiftTile data-testid='marshmallow-gift' data={gifts[1]} />
      </>
    </StoryContainer>
  );
};
