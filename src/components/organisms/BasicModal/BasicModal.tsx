import React, { ReactNode, useState } from 'react';
import './BasicModal.scss';
import ReactModal from 'react-modal';
import cx from 'classnames';
import Button from '../../atoms/Button';

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
  const [open, setOpen] = useState(false);
  const openBasicModal = () => setOpen(true);
  const closeBasicModal = () => setOpen(false);

  return (
    <div data-testid={testId}>
      <Button data-testid={testId} text={openingButtonText} onClick={openBasicModal} variant={openingButtonVariant} />
      <ReactModal
        isOpen={open}
        onRequestClose={closeBasicModal}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        overlayClassName={cx('basic-modal__overlay')}
        className={cx('basic-modal__content')}
        ariaHideApp={false}
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default BasicModal;
