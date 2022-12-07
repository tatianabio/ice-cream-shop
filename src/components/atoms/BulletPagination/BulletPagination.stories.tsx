import globalMswHandlers from '../../../mock/mswHandlers';
import BulletPagination from './BulletPagination';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/BulletPagination',
  component: BulletPagination,
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

export const Demo = () => {
  return (
    <StoryContainer title='Bullet pagination'>
      <BulletPagination data-testid='offers' />
    </StoryContainer>
  );
};
