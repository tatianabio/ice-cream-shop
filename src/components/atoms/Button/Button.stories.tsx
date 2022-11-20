import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

interface IDemo {
  onClickTest?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Demo = ({ onClickTest }: IDemo) => {
  const buttonOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickTest ? onClickTest(event) : action('onClick')(event);
  };
  return (
    <>
      <StoryContainer
        title='Buttons'
        text='Primary button (default, disabled, loading)'
        style={{
          backgroundColor: 'var(--special-light)',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='primary-button-default' text='order' variant='primary' onClick={buttonOnClick} />
          <Button
            disabled
            data-testid='primary-button-disabled'
            text='order'
            variant='primary'
            onClick={buttonOnClick}
          />
          <Button data-testid='primary-button-loading' text='order' variant='primary' loading onClick={buttonOnClick} />
        </div>
      </StoryContainer>

      <StoryContainer
        text='Secondary button (default, disabled, loading)'
        style={{
          backgroundColor: 'var(--basic-extra-light)',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='secondary-button-default' text='order' variant='secondary' onClick={buttonOnClick} />
          <Button
            disabled
            data-testid='secondary-button-disabled'
            text='order'
            variant='secondary'
            onClick={buttonOnClick}
          />
          <Button
            data-testid='secondary-button-loading'
            text='order'
            variant='secondary'
            loading
            onClick={buttonOnClick}
          />
        </div>
      </StoryContainer>

      <StoryContainer
        text='Thirdly button (default, disabled, loading)'
        style={{
          backgroundColor: 'var(--special-light)',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='thirdly-button-default' text='order' variant='thirdly' onClick={buttonOnClick} />
          <Button
            disabled
            data-testid='thirdly-button-disabled'
            text='order'
            variant='thirdly'
            onClick={buttonOnClick}
          />
          <Button data-testid='thirdly-button-loading' text='order' variant='thirdly' loading onClick={buttonOnClick} />
        </div>
      </StoryContainer>
    </>
  );
};

Demo.parameters = {
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
};
