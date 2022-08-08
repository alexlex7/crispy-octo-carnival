import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { motion, AnimatePresence } from 'framer-motion';

let modalRoot = document.querySelector('#modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

export default function Modal({ isModalOpen, toggleModal, children }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          }}
          className={styles.overlay}
          onClick={handleClick}
        >
          <motion.div
            initial={{
              x: 1200,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              scale: 1,
              transition: {
                delay: 1,
                duration: 1.5,
              },
            }}
            exit={{
              x: 1200,
              scale: 0.5,
              transition: {
                duration: 1.5,
              },
            }}
            className={styles.modalContainer}
          >
            <motion.div className={styles.modalContent}>{children}</motion.div>
            <button
              onClick={toggleModal}
              type="button"
              className={styles.closeBtn}
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
