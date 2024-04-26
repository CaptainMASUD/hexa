import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NetflixSubscription() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
       <AnimatePresence>
        {!isLoading && (
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-semibold text-red-400 mb-8 underline flex justify-center items-center"
          >
            <span>More details about Plan </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mt-2"
              style={{ marginLeft: "0.5rem" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.path
                fillRule="evenodd"
                d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
                style={{ originX: "50%", originY: "50%" }}
              />
              <motion.path
                fillRule="evenodd"
                d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                clipRule="evenodd"
                style={{ originX: "50%", originY: "50%" }}
              />
            </motion.svg>
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Basic Plan</h2>
              <p className="text-gray-600 mb-4">Watch on 1 screen at a time in Standard Definition. Download videos on 1 phone or tablet.</p>
              <p className="text-gray-600">Quality: Standard Definition (SD)</p>
              <p className="text-gray-600">Optimizations: Minimal data usage, suitable for slower internet connections.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Standard Plan</h2>
              <p className="text-gray-600 mb-4">Watch on 2 screens at a time in High Definition. Download videos on 2 phones or tablets or TV.</p>
              <p className="text-gray-600">Quality: High Definition (HD)</p>
              <p className="text-gray-600">Optimizations: Balanced data usage, suitable for most internet connections.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Premium Plan</h2>
              <p className="text-gray-600 mb-4">Watch on 4 screens at a time in Ultra High Definition. Download videos on 4 phones or tablets or TV.</p>
              <p className="text-gray-600">Quality: Ultra High Definition (UHD)</p>
              <p className="text-gray-600">Optimizations: Maximum quality and data usage, requires fast and stable internet connection.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NetflixSubscription;
