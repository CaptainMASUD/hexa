import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NetflixSubscription() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
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
