import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled';

const rootModal = document.querySelector('#rootModal');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalContent onClick={handleOverlayClick}>
      <Overlay> {children}</Overlay>
    </ModalContent>,
    rootModal
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
