import { useEffect, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Close } from '@nsmr/pixelart-react';
import './Modal.css';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      onClose();
      document.body.classList.remove('overflow-hidden');
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='modal-overlay'
    >
      <div onClick={e => e.stopPropagation()} className='modal-content'>
        <button onClick={onClose} className='close'>
          <Close />
        </button>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
