import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Modal({ message, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 p-4"
    >
      <div className="bg-red-500 bg-opacity-75 p-4 rounded-lg text-white">
        <p>{message}</p>
      </div>
    </motion.div>
  );
}

export default Modal;
