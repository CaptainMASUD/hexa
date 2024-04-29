import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../Context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const [itemQuantities, setItemQuantities] = useState({});
  const [notification, setNotification] = useState(null);
  const [isPageLoaded, setPageLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setPageLoaded(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    // Remove notification after 3 seconds
    const timeout = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [notification]);

  const getScreenType = (subscriptionType) => {
    return subscriptionType === "Basic" || subscriptionType === "Standard"
      ? "Share Screen"
      : "Personal Screen";
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    // Set notification message
    setNotification(`Removed ${item.name} from the cart`);
    // Remove the item from itemQuantities when removing from cart
    const updatedQuantities = { ...itemQuantities };
    delete updatedQuantities[item.name];
    setItemQuantities(updatedQuantities);
  };

  const handleIncrementQuantity = (itemName) => {
    if (itemQuantities[itemName] === undefined) {
      // If item is not already in the cart, add it
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemName]: 1,
      }));
    } else {
      // If item is already in the cart, show notification
      setNotification(`Cannot add more than one ${itemName} to the cart`);
    }
  };

  const handleDecrementQuantity = (itemName) => {
    if (itemQuantities[itemName] > 1) {
      // Decrease the quantity if greater than 1
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemName]: prevQuantities[itemName] - 1,
      }));
    } else {
      // If quantity is 1 or less, remove the item
      handleRemoveFromCart({ name: itemName }); // Pass an object similar to cartItems
    }
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {!isPageLoaded && (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, loop: Infinity, ease: "linear" }}
            className="border-4 border-gray-300 border-t-4 border-t-gray-500 rounded-full h-16 w-16 animate-spin"
          ></motion.div>
        </div>
      )}
      {isPageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="opacity-0"
        >
          <h1 className="text-3xl font-bold mb-8">Cart</h1>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            >
              <span className="block sm:inline">{notification}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </motion.div>
          )}
          {cartItems.length === 0 ? (
            <div className="text-center grid place-content-center">
              <p>Your cart is empty</p>
              <button
                onClick={handleContinueShopping}
                className="text-red-700 font-semibold flex flex-row items-center justify-center hover:text-white py-2 px-4 rounded-full border border-red-700 hover:bg-red-700 transition duration-300 ease-in-out mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-600 mb-2">{item.price}</p>
                    <p className="text-gray-600 mb-2 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                        <path
                          fillRule="evenodd"
                          d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {getScreenType(item.name)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrementQuantity(item.name)}
                      className="text-red-700 hover:text-white font-bold py-1 px-3 rounded-full  hover:bg-red-600 transition duration-300 ease-in-out flex items-center mr-2"
                    >
                      -
                    </button>
                    <span className="text-gray-600 mr-2">
                      {itemQuantities[item.name] || 1}
                    </span>
                    <button
                      onClick={() => handleIncrementQuantity(item.name)}
                      className="text-green-700 hover:text-white font-bold py-1 px-3 rounded-full  hover:bg-green-600 transition duration-300 ease-in-out flex items-center"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="text-red-700 hover:text-white font-bold py-2 px-4 rounded-full border border-red-700 hover:bg-red-600 transition duration-300 ease-in-out flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="mt-8 grid place-content-center">
              <button
                onClick={handleProceedToCheckout}
                className="text-red-700 font-semibold flex flex-row hover:text-white  py-2 px-4 rounded-full border border-red-700 hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Proceed to Checkout{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default CartPage;
