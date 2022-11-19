import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Demo = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Button size='medium' label='test' />
    <Button size='small' label='test' />
    <Button size='large' label='test' />
  </div>
);
