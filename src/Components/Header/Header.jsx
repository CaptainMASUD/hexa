import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../Context/CartContext/CartContext';

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-red-700 text-white p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold mr-4" style={{ fontFamily: "Gruppo" }}>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity, duration: 0.5 } }}
              >
                H
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity, duration: 0.5 } }}
              >
                 &nbsp;E
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity, duration: 0.5 } }}
              >
                 &nbsp;X
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, transition: { yoyo: Infinity, duration: 0.5 } }}
              >
                 &nbsp;A
              </motion.span>
            </NavLink>
          </div>
          <div className='flex'>
            <NavLink to="/" className="mr-4 hover:text-black duration-500" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            </NavLink>
            <NavLink to="/cart" className="mr-4 hover:text-black duration-500" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>
              {cartCount > 0 && <span className="bg-red-500 text-white rounded-full px-2">{cartCount}</span>}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
