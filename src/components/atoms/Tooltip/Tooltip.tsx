import React, { useState } from 'react';
import './Tooltip.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';

interface ITooltip {
  text?: string;
  /** Technical attributes */
  'data-testid'?: string;
  className?: string;
}

const Tooltip = ({ text, className, 'data-testid': testId }: ITooltip) => {
  const { t } = useTranslation();

  const [toggle, setToggle] = useState<HTMLButtonElement | null>(null);
  const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
  const [arrow, setArrow] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(toggle, tooltip, {
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
        },
      },
    ],
  });

  const [isTooltipShown, setIsTooltipShown] = useState(true);

  const onMouseEnterHandler = () => {
    setIsTooltipShown(true);
  };
  const onMouseLeaveHandler = () => {
    setIsTooltipShown(true);
  };

  return (
    <div className={cx('tooltip', className)} data-testid={`${testId}-tooltip`}>
      <button
        ref={setToggle}
        type='button'
        aria-labelledby='tooltip-label'
        aria-label={`${t('showTooltip')}`}
        className='tooltip__toggle'
        data-testid={`${testId}-tooltip`}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      />

      {isTooltipShown &&
        createPortal(
          <div
            ref={setTooltip}
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
