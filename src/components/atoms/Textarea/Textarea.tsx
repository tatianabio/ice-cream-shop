import React, { HTMLProps } from 'react';
import './Textarea.scss';
import cx from 'classnames';

interface ITextarea extends HTMLProps<HTMLTextAreaElement> {
  isInvalid?: boolean;
  /** Technical attributes */
  'data-testid': string;
}

const Textarea = ({ 'data-testid': testId, rows = 5, isInvalid = false, ...props }: ITextarea) => {
  return (
    <textarea
      {...props}
      rows={rows}
      className={cx('textarea', isInvalid && 'textarea--invalid')}
      data-testid={testId}
    />
  );
};

export default Textarea;
