import React from 'react';
import { motion } from 'framer-motion';

function LoadingCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-200 shadow-md rounded-lg p-6 h-64 mx-4"
    >
      <div className="animate-pulse h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="animate-pulse h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="flex space-x-2">
        <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="mt-4">
        <div className="animate-pulse h-8 bg-red-400 text-white font-bold px-4 py-2 rounded-md"></div>
      </div>
    </motion.div>
  );
}

export default LoadingCard;
