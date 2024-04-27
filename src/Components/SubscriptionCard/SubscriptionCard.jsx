import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext/CartContext';

function SubscriptionCard({ name, price, features }) {
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [showAlreadyInCartNotification, setShowAlreadyInCartNotification] = useState(false);
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
    <div className="bg-white shadow-md rounded-lg p-6 h-80 mx-4 relative mb-10">
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
        <button onClick={handleAddToCart} className="hover:bg-red-600 hover:text-white text-red-700 py-1 px-3 rounded-full border border-red-700 transition duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
      {showAddedNotification && (
        <div className="absolute top-4 left-4 bg-green-500 text-white py-2 px-4 rounded-md">
          Item added to cart!
        </div>
      )}
      {showAlreadyInCartNotification && (
        <div className="absolute top-4 left-4 bg-red-500 text-white py-2 px-4 rounded-md">
          Item already in cart!
        </div>
      )}
    </div>
  );
}

export default SubscriptionCard;
