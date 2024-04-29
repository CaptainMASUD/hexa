import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SubscriptionCard from './Components/SubscriptionCard/SubscriptionCard';
import LoadingCard from './Components/LoadingCard/LoadingCard';
import Modal from './Components/Modal/Modal';
import NetflixSubscription from './Components/NetflixSubscription/NetflixSubscription';
import { NavLink } from 'react-router-dom';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData([
        {
          name: "Basic",
          price: "180 BDT",
          features: ['Access to standard definition', '1 screen at a time (share)', 'Extensive content library',"No offline Download",'Pin locked']
        },
        {
          name: "Standard",
          price: "220 BDT",
          features: ['Access to standard definition', '2 screen at a time (share)', 'Extensive content library',"No offline Download",'Pin locked']
        },
        {
          name: "Silver",
          price: "280  BDT",
          features: ['Access to ultra high definition', '3 screens at a time (share)', 'Extensive content library', 'Offline Download available','Pin locked']
        },
        {
          name: "Gold",
          price: "350 BDT",
          features: ['Access to ultra high definition', '4 screens at a time', 'Extensive content library', 'Offline Download available','Personal Pin locked']
        }
      ]);
      setLoading(false);
    }, 2000); 
  }, []);

  const handleAddToCart = () => {
    setShowModal(true);
    setModalMessage('Item added to cart!');
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      
      {/* Shopping cart logo pop-up */}
    <NavLink to='/cart'>
    <div className="fixed bottom-4 right-4 bg-black duration-300 hover:bg-red-700 p-2 rounded-full cursor-pointer z-50"
      onMouseEnter={() => setShowSuggestion(true)}
      onMouseLeave={() => setShowSuggestion(false)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-white duration-300  text-white">
          <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zzm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Zzm-1.5 5.25h9a.75.75 0 1 1 0 1.5h-9a.75.75 0 1 1 0-1.5Z" clipRule="evenodd" />
        </svg>
        {showSuggestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bg-white text-black rounded-lg px-2 py-1 text-xs bottom-0 right-0 mr-2 mb-12 shadow"
          >
            View Cart
          </motion.div>
        )}
      </div>
    </NavLink>
     

      <main className="container mx-auto py-8 relative">
        <AnimatePresence>
          <motion.h1
            key="choose-plan"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{fontFamily:"Plus Jakarta Sans"}}
              className='text-[1.6rem] md:text-md'
            >
              Choose
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{fontFamily:"Plus Jakarta Sans"}}
              className='text-[1.6rem] md:text-md'
            >
              Your
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{fontFamily:"Plus Jakarta Sans"}}
              className='text-[1.6rem] md:text-md'
            >
              Netflix
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{fontFamily:"Plus Jakarta Sans"}}
              className='text-[1.6rem] md:text-md'
            >
              Plan
            </motion.span>
          </motion.h1>
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            data.map((item, index) => (
              <SubscriptionCard
                key={index}
                name={item.name}
                price={item.price}
                features={item.features}
                onAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>
        
        <AnimatePresence>
          <motion.div
            key="netflix-subscription"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <NetflixSubscription/>
          </motion.div>
        </AnimatePresence>

        {/* Delayed rendering of WhyChooseUs component */}
        { !loading && (
          <AnimatePresence>
            <motion.div
              key="why-choose-us"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ transitionDelay: '1s' }} // Delayed by 1 second
            >
              <WhyChooseUs/>
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}

export default App;
