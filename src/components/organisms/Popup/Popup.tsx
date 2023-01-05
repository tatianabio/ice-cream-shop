import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import './Popup.scss';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
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
  const popup = useRef<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(openingButton.current, popup.current, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'right'],
        },
      },
    ],
  });

  const openPopup = useCallback(() => setIsPopupOpen(true), []);
  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  const onOpeningButtonClickHandler = () => {
    isPopupOpen ? closePopup() : openPopup();
  };

  return (
    <div data-testid={`${testId}-modal-container`}>
      <button ref={openingButton} type='button' data-testid={`${testId}-opening`} onClick={onOpeningButtonClickHandler}>
        {openingButtonIcon}
        {t(`${openingButtonText}`)}
      </button>
      {isPopupOpen &&
        createPortal(
          <div
            ref={popup}
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
