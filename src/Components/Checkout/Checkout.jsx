import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../Context/CartContext/CartContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";


function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    // Calculate total price in BDT
    let total = 0;
    cartItems.forEach((item) => {
      // Assuming item.price is in BDT format (e.g., "৳250")
      total += parseFloat(item.price.replace("৳", ""));
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handlePayment = () => {
    // Logic to check if transaction ID matches
    // For demonstration, assuming transaction ID is correct if not empty
    if (transactionId.trim() !== "") {
      // Clear the cart items
      setShowModal(true);
      setShowNotification(true);
      setNotificationMessage(`${paymentMethod} number copied!`);

      // Hide notification after 2 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(getPaymentNumber(paymentMethod));
    setShowNotification(true);
    setNotificationMessage(`${paymentMethod} number copied!`);

    // Hide notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const getPaymentNumber = (method) => {
    switch (method) {
      case "Bkash":
        return "017xxxxxx";
      case "Nagad":
        return "017xxxxxx";
      case "Rocket":
        return "019xxxxxx";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4 relative"
    >
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Items</h2>
        <h2 className="text-xl font-semibold">Price</h2>
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <hr />
      <p className="text-lg font-semibold mb-2 flex justify-end">
        Subtotal: ৳{totalPrice.toFixed(2)}
      </p>
      <h1 className="text-center mb-5 flex justify-center text-lg font-semibold">
        Choose your payment method{" "}
        <IoMdArrowDropdown className=" text-red-400 w-8 h-8" />
      </h1>
      <div className="flex justify-center mb-4">
        <button
          className={`border text-pink-500 border-pink-500 focus:text-white hover:text-white duration-300 hover:bg-pink-600 font-bold py-2 px-4 rounded-full mr-2 ${
            paymentMethod === "Bkash" && "bg-pink-600 "
          }`}
          onClick={() => setPaymentMethod("Bkash")}
        >
          Bkash
        </button>
        <button
          className={`border border-orange-400 hover:bg-orange-600 focus:text-white text-orange-400 hover:text-white font-bold py-2 px-4 rounded-full mr-2 ${
            paymentMethod === "Nagad" && "bg-orange-600"
          }`}
          onClick={() => setPaymentMethod("Nagad")}
        >
          Nagad
        </button>
        <button
          className={`border border-purple-400 hover:bg-purple-600 text-purple-500 focus:text-white hover:text-white font-bold py-2 px-4 rounded-full ${
            paymentMethod === "Rocket" && "bg-purple-600"
          }`}
          onClick={() => setPaymentMethod("Rocket")}
        >
          Rocket
        </button>
      </div>
      {paymentMethod && (
        <>
          <div className="bg-slate-200 text-black p-4 rounded-md mb-4 drop-shadow-md">
            <p className="text-xl font-semibold">
              {paymentMethod} Number:{" "}
              <span
                onClick={handleCopyNumber}
                className="cursor-pointer flex flex-row w-28 text-white p-[3px] rounded-md bg-slate-500 text-[1rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
                {getPaymentNumber(paymentMethod)}
              </span>
            </p>
            <ul>
              <li className="mt-2 mb-1">
                1. Please use the{" "}
                <span className="font-bold">"Send Money"</span> from{" "}
                {paymentMethod} App.
              </li>
              <li className="mb-2">
                2. Sent this amount{" "}
                <span className="text-red-700 font-bold">
                  {totalPrice.toFixed(2)}
                </span>{" "}
                tk
              </li>
              <li className="mb-2">
                3. After Payment give your{" "}
                <span className="text-yellow-200 bg-slate-600 p-[1px] rounded-md">
                  'Transaction ID'
                </span>{" "}
              </li>
              <li className="flex">
                4. Then enter your&nbsp;{" "}
                <span className="text-green-400 flex bg-slate-600 p-[1px] rounded-md">
                  &nbsp;WhatsApp&nbsp;
                </span>{" "}
                &nbsp;or&nbsp;{" "}
                <span className="text-red-300 bg-slate-600 flex  p-[1px] rounded-md">
                  &nbsp;Email&nbsp;
                </span>{" "}
              </li>
            </ul>
            {/* Notification message */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex justify-center items-center z-50"
                >
                  <div className="bg-green-500 text-white py-2 px-4 rounded-md">
                    {notificationMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="text-lg font-semibold mb-2">Enter Transaction ID</p>
          <input
            type="text"
            placeholder="xxxxxxxxxx"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          <p className="text-lg font-semibold mb-2">
            Enter Contact Information
          </p>
          <input
            type="text"
            placeholder="Email or WhatsApp number"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          <button
            onClick={handlePayment}
            disabled={!transactionId.trim() || !contactInfo.trim()}
            className={`bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out ${
              (!transactionId.trim() || !contactInfo.trim()) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            Confirm Payment
          </button>
        </>
      )}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="text-black p-8 rounded-md bg-red-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
            <p>Your payment has been successfully received.</p>
            <p>Total Amount Paid: ৳{totalPrice.toFixed(2)}</p>
            <p>Via : {paymentMethod}</p>
            <p>Your will get the account as soon as possible.</p>
            <button
              onClick={() => {
                setShowModal(false);
                clearCart();
                navigate("/")
              }}
              className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out mt-4"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Checkout;

