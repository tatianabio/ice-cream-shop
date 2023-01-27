import React, { ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import './Popup.scss';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import cx from 'classnames';
import Cross from '../../../assets/svg/cross';
import useClickOutside from '../../utils/useClickOutside';

interface IPopup {
  /** The content of the popup */
  children: ReactElement;
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

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  // Changing the overflow and adding the listener for Escape pressing when the popup is open
  useEffect(() => {
    // handler on Esc press
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closePopup();
      }
    };

    // If the popup is open, add Esc press listener, otherwise, remove it
    // TODO: solve the problem with the overflow of popup (on mobile resolution it does not work) so that the lines below were commented
    if (!isPopupOpen) {
      // document.body.style.overflow = 'auto';
      window.removeEventListener('keyup', closeOnEsc);
    } else {
      // document.body.style.overflow = 'hidden';
      window.addEventListener('keyup', closeOnEsc);
    }

    // If the popup content is destroyed, remove keyup listener
    return () => {
      window.removeEventListener('keyup', closeOnEsc);
    };
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

  useClickOutside(popup, closePopup, isPopupOpen, openingButton.current);

  // TODO: create separated component for closing button

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
              <span className='visually-hidden'>{t('closePopup')}</span>
              <Cross />
            </button>
            {React.cloneElement(children, { onClose: closePopup })}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popup;
