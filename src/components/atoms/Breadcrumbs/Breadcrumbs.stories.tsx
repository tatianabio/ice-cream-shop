import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs, { breadcrumbsCatalog } from './Breadcrumbs';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8153%3A3242&t=NLBtXuXkMTqBj2nE-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Breadcrumbs' text='in Catalog page as an example'>
      <BrowserRouter>
        <Breadcrumbs breadcrumbsArray={breadcrumbsCatalog} />
      </BrowserRouter>
    </StoryContainer>
  );
};
