import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegPlayCircle, FaRegStar, FaRegGem } from "react-icons/fa"; // Import icons from React Icons
import { FiVideo, FiSun, FiTv, FiSmartphone } from "react-icons/fi"; // Import more icons
import { IoMdLock } from "react-icons/io"; // Import lock icon from Io icons

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
            className="text-2xl font-semibold text-red-400 mb-8 flex justify-center items-center"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center "
            >
              <FaRegPlayCircle className="text-5xl mb-4 text-gray-600" />
              <p className="text-gray-600 mb-2">Basic Plan</p>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <FiVideo className="text-xl text-red-400" />
                <span>SD</span>
              </div>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <IoMdLock className="text-xl text-red-400" />
                <span>Locked</span>
              </div>
              <div className="flex space-x-2 text-gray-600">
                <FiSmartphone className="text-xl text-red-400" />
                <span>1 Screen</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center"
            >
              <FaRegStar className="text-5xl mb-4 text-gray-600" />
              <p className="text-gray-600 mb-2">Standard Plan</p>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <FiSun className="text-xl text-red-400" />
                <span>HD</span>
              </div>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <IoMdLock className="text-xl text-red-400" />
                <span>Locked</span>
              </div>
              <div className="flex space-x-2 text-gray-600">
                <FiTv className="text-xl text-red-400" />
                <span>2 Screens</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaRegGem className="text-5xl mb-4 text-gray-600" />
              </motion.div>
              <p className="text-gray-600 mb-2">Premium Plan</p>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <FiTv className="text-xl text-red-400" />
                <span>UHD</span>
              </div>
              <div className="flex space-x-2 text-gray-600 mb-2">
                <IoMdLock className="text-xl text-red-400" />
                <span>Locked</span>
              </div>
              <div className="flex space-x-2 text-gray-600">
                <FiTv className="text-xl text-red-400" />
                <span>4 Screens</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NetflixSubscription;
