import React from 'react';
import { action } from '@storybook/addon-actions';
import Button, { IButton } from './Button';
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
      <StoryContainer title='Buttons' text='Primary button (default, disabled, loading)'>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='primary-default' text='order' variant='primary' onClick={buttonOnClick} />
          <Button disabled data-testid='primary-disabled' text='order' variant='primary' onClick={buttonOnClick} />
          <Button data-testid='primary-loading' text='order' variant='primary' loading onClick={buttonOnClick} />
        </div>
      </StoryContainer>

      <StoryContainer text='Secondary button (default, disabled, loading)' hasPinkBackground={false}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='secondary-default' text='order' variant='secondary' onClick={buttonOnClick} />
          <Button disabled data-testid='secondary-disabled' text='order' variant='secondary' onClick={buttonOnClick} />
          <Button data-testid='secondary-loading' text='order' variant='secondary' loading onClick={buttonOnClick} />
        </div>
      </StoryContainer>

      <StoryContainer text='Thirdly button (default, disabled, loading)'>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button data-testid='thirdly-default' text='order' variant='thirdly' onClick={buttonOnClick} />
          <Button disabled data-testid='thirdly-disabled' text='order' variant='thirdly' onClick={buttonOnClick} />
          <Button data-testid='thirdly-loading' text='order' variant='thirdly' loading onClick={buttonOnClick} />
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

export const Playground = (props: IButton) => {
  return (
    <StoryContainer style={{ minHeight: '100px' }}>
      <Button {...props} onClick={action('onClick')} />
    </StoryContainer>
  );
};

Playground.argTypes = {
  text: { control: 'text', defaultValue: 'order' },
  variant: { control: 'inline-radio', options: ['primary', 'secondary', 'thirdly'], defaultValue: 'primary' },
  loading: { control: 'boolean', defaultValue: 'true' },
  'data-testid': {
    table: { disable: true },
  },
};
