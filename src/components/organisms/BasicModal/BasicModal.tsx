import React, { ReactNode, useEffect, useState } from 'react';
import './BasicModal.scss';
import ReactModal from 'react-modal';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/Button';
import Cross from '../../../assets/svg/cross';

interface IBasicModal {
  /** The content of the modal */
  children: ReactNode | string;
  /** Text inside the button that opens the modal */
  openingButtonText: string;
  /** Variant the button that opens the modal */
  openingButtonVariant?: 'primary' | 'secondary' | 'thirdly';
  /** Technical attributes */
  'data-testid': string;
}

const BasicModal = ({
  children,
  openingButtonText,
  openingButtonVariant = 'primary',
  'data-testid': testId,
}: IBasicModal) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const openBasicModal = () => setOpen(true);
  const closeBasicModal = () => setOpen(false);
  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = 'auto');
  }, [open]);
  return (
    <div data-testid={`${testId}-modal-container`}>
      <Button
        data-testid={`${testId}-opening`}
        text={openingButtonText}
        onClick={openBasicModal}
        variant={openingButtonVariant}
      />
      <ReactModal
        isOpen={open}
        onRequestClose={closeBasicModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        overlayClassName={cx('basic-modal__overlay')}
        className={cx('basic-modal__content')}
        ariaHideApp={false}
        role='dialog'
        contentLabel={`${t('modalWindow')}`}
        testId={`${testId}-modal-content`}
      >
        <button
          type='button'
          onClick={closeBasicModal}
          className='basic-modal__close-button'
          data-testid={`${testId}-close-button`}
        >
          <span className='visually-hidden'>{t('closeModal')}</span>
          <Cross />
        </button>
        {children}
      </ReactModal>
    </div>
  );
};

export default BasicModal;
