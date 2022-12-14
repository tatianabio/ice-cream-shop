import React, { ChangeEvent, ForwardedRef, forwardRef, HTMLProps, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import './Input.scss';

export interface IInput extends Omit<HTMLProps<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'ref'> {
  /** Does this input's value invalid or not? */
  isInvalid?: boolean;
  /** Initial value of the input after rendering */
  initialValue?: string;
  /** OnChange Input Handler */
  onChange?: (value: string) => void;
  /** Technical attributes */
  'data-testid': string;
}

const Input = forwardRef(
  (
    { isInvalid = false, initialValue, onChange, 'data-testid': testId, ...props }: IInput,
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    const [value, setValue] = useState<string>(initialValue || '');

    useEffect(() => {
      initialValue !== undefined && setValue(initialValue);
    }, [initialValue]);

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange?.(event.target.value);
    }, []);

    return (
      <input
        {...props}
        data-testid={`${testId}-input`}
        ref={ref}
        value={value}
        onChange={onChangeHandler}
        className={cx('input', props.className, isInvalid && 'input--invalid')}
      />
    );
  }
);

export default Input;
