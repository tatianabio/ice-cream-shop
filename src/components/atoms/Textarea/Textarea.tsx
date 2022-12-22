import React, { ChangeEvent, ForwardedRef, forwardRef, HTMLProps, useCallback, useEffect, useState } from 'react';
import './Textarea.scss';
import cx from 'classnames';

export interface ITextarea extends Omit<HTMLProps<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange' | 'ref'> {
  /** Does this textarea value invalid or not? */
  isInvalid?: boolean;
  /** Initial value of the textarea after rendering */
  initialValue?: string;
  /** onChange Handler of the textarea */
  onChange?: (value: string) => void;
  /** Technical attributes */
  'data-testid': string;
}

const Textarea = forwardRef(
  (
    { 'data-testid': testId, rows = 5, isInvalid = false, initialValue, onChange, ...props }: ITextarea,
    ref?: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [value, setValue] = useState<string>(initialValue || '');

    useEffect(() => {
      initialValue !== undefined && setValue(initialValue);
    }, [initialValue]);

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
      onChange?.(event.target.value);
    }, []);

    return (
      <textarea
        {...props}
        ref={ref}
        value={value}
        rows={rows}
        onChange={onChangeHandler}
        className={cx('textarea', props.className, isInvalid && 'textarea--invalid')}
        data-testid={`${testId}-textarea`}
      />
    );
  }
);

export default Textarea;
