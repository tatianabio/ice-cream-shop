import React, { HTMLProps, useCallback, useRef, useState } from 'react';
import './Tooltip.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';

interface ITooltip extends HTMLProps<HTMLDivElement> {
  /** Text inside the Tooltip */
  text?: string;
  /** Technical attributes */
  'data-testid'?: string;
  className?: string;
}

const Tooltip = ({ text, className, 'data-testid': testId, ...props }: ITooltip) => {
  const { t } = useTranslation();
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const toggle = useRef<HTMLButtonElement | null>(null);
  const tooltip = useRef<HTMLDivElement | null>(null);
  const [arrow, setArrow] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(toggle.current, tooltip.current, {
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
          padding: { top: 10 },
        },
      },
    ],
  });

  const openTooltip = useCallback(() => setIsTooltipShown(true), []);
  const closeTooltip = useCallback(() => setIsTooltipShown(false), []);

  return (
    <div {...props} className={cx('tooltip', className)} data-testid={`${testId}-tooltip`}>
      <button
        ref={toggle}
        type='button'
        aria-labelledby='tooltip-label'
        aria-label={`${t('showTooltip')}`}
        className='tooltip__toggle'
        data-testid={`${testId}-toggle`}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
      />

      {isTooltipShown &&
        createPortal(
          <div
            ref={tooltip}
            style={styles.popper}
            {...attributes.popper}
            className='tooltip__text-wrapper'
            role='tooltip'
            id='tooltip-label'
            data-testid={`${testId}-tooltip-text`}
          >
            <div className='tooltip__arrow' ref={setArrow} style={styles.arrow} />
            <span className='tooltip__text'>{t(`${text}`)}</span>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
