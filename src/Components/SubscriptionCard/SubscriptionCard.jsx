import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { FaCartPlus } from "react-icons/fa6";

function SubscriptionCard({ name, price, features }) {
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [showAlreadyInCartNotification, setShowAlreadyInCartNotification] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false); // State for suggestion message
  const { cartItems, addToCart } = useCart(); // Access cartItems and addToCart function from context

  const handleAddToCart = () => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some(item => item.name === name);

    // If the item is already in the cart, display a notification and return
    if (isItemInCart) {
      setShowAlreadyInCartNotification(true);

      setTimeout(() => {
        setShowAlreadyInCartNotification(false);
      }, 3000);

      return;
    }

    // If the item is not in the cart, add it to the cart and display a notification
    addToCart({ name, price, features });
    setShowAddedNotification(true);

    setTimeout(() => {
      setShowAddedNotification(false);
    }, 3000);
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-6 mx-4 mb-10">
      <div className="absolute top-2 right-2 text-red-500">
        <BsBookmarkCheckFill className="text-3xl cursor-pointer" onMouseEnter={() => setShowSuggestion(true)} onMouseLeave={() => setShowSuggestion(false)} />
        <AnimatePresence>
          {showSuggestion && ( // Show suggestion message when hovering over the icon
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-full transform translate-x-2 -translate-y-1/2 bg-white text-gray-600 px-2 py-1 rounded-md shadow text-xs"
            >
              Plan Available
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="text-2xl font-bold mb-4">{price} <span className='text-sm font-semibold'>/month</span></p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <svg className="w-4 h-4 flex-none text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M19 10a1 1 0 01-1 1h-4v4a1 1 0 11-2 0v-4H6a1 1 0 110-2h4V6a1 1 0 112 0v4h4a1 1 0 011 1z" clipRule="evenodd"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className='grid place-content-center'>
        <button onClick={handleAddToCart} className="hover:bg-red-600 flex text-md hover:text-white text-red-700 py-1 px-3 rounded-full border border-red-700 transition duration-300 ease-in-out">
          <FaCartPlus className='mt-1' /> &nbsp;Add to Cart
        </button>
      </div>
      <AnimatePresence>
        {showAddedNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Item added to cart!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAlreadyInCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Item already in cart!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SubscriptionCard;
