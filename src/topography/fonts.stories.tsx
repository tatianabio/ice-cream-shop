import React, { ReactElement } from 'react';
import './fonts.stories.scss';
import TextBox from './TextBox';

export default {
  title: 'Topography/Fonts',
};

// eslint-disable-next-line
const textExample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const headings: string[] = ['h1', 'h2', 'h3', 'h4', 'h5'];

const paragraphs: string[] = ['p1', 'p2', 'p3', 'p3-bold'];

const subscriptions: string[] = ['s1', 's1-bold', 's2'];

export const Demo = () => {
  const textHeadingsTSX: ReactElement[] = headings.map((item) => (
    <TextBox title={`Heading ${item}`} className={item} />
  ));

  const textParagraphsTSX: ReactElement[] = paragraphs.map((item) => (
    <TextBox title={`Paragraph ${item}`} text={textExample} className={item} />
  ));

  const textSubscriptionsTSX: ReactElement[] = subscriptions.map((item) => (
    <TextBox title={`Subscription ${item}`} text={textExample} className={item} />
  ));

  return (
    <div>
      <section className='headings'>{textHeadingsTSX}</section>
      <section className='paragraphs'>{textParagraphsTSX}</section>
      <section className='subscriptions'>{textSubscriptionsTSX}</section>
    </div>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=576%3A2664&t=mTfv2Qdgxem0exJb-4',
  },
};
