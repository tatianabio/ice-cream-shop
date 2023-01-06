import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import './Popup.scss';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import cx from 'classnames';
import Cross from '../../../assets/svg/cross';

interface IPopup {
  /** The content of the popup */
  children: ReactNode;
  /** Text inside the button that opens the popup */
  openingButtonText: string;
  /** Text inside the button that opens the popup */
  openingButtonIcon: ReactNode;
  /** Technical attributes */
  'data-testid': string;
}

const Popup = ({ 'data-testid': testId, children, openingButtonText, openingButtonIcon }: IPopup) => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    isPopupOpen && (document.body.style.overflow = 'hidden');
    !isPopupOpen && (document.body.style.overflow = 'auto');
  }, [isPopupOpen]);

  const openingButton = useRef<HTMLButtonElement | null>(null);

  const [popup, setPopup] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(openingButton.current, popup, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      },
    ],
  });

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  return (
    <div data-testid={`${testId}-modal-container`}>
      <button
        className={cx('popup__opening-button', isPopupOpen && 'popup__opening-button--current')}
        ref={openingButton}
        type='button'
        data-testid={`${testId}-opening`}
        onClick={openPopup}
      >
        {openingButtonIcon}
        {t(`${openingButtonText}`)}
      </button>
      {isPopupOpen &&
        createPortal(
          <div
            ref={setPopup}
            style={styles.popper}
            {...attributes.popper}
            className='popup__container'
            data-testid={`${testId}-popup`}
            role='dialog'
          >
            <button
              type='button'
              onClick={closePopup}
              className='popup__close-button'
              data-testid={`${testId}-close-button`}
            >
              <div className='tooltip__arrow' style={styles.arrow} />

              <span className='visually-hidden'>{t('')}</span>
              <Cross />
            </button>
            {children}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popup;
