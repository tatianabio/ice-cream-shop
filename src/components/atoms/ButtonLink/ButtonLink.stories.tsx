import React from 'react';
import ButtonLink from './ButtonLink';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Atoms/ButtonLink',
  component: ButtonLink,
  parameters: {
    design: [
      {
        name: 'Primary',
        type: 'figma',
        url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7581%3A3909&t=mTfv2Qdgxem0exJb-4',
      },
      {
        name: 'Secondary',
        type: 'figma',
        url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7581%3A3915&t=mTfv2Qdgxem0exJb-4',
      },
      {
        name: 'Thirdly',
        type: 'figma',
        url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7581%3A3920&t=mTfv2Qdgxem0exJb-4',
      },
    ],
  },
};

export const Demo = () => {
  return (
    <>
      <StoryContainer title='Button-links' text='Primary button-link'>
        <ButtonLink data-testid='primary-button-link' text='order' variant='primary' link='#' />
      </StoryContainer>

      <StoryContainer text='Secondary button-link' hasPinkBackground={false}>
        <ButtonLink data-testid='secondary-button-link' text='order' variant='secondary' link='#' />
      </StoryContainer>

      <StoryContainer text='Thirdly button-link'>
        <ButtonLink data-testid='thirdly-button-link' text='order' variant='thirdly' link='#' />
      </StoryContainer>
    </>
  );
};
