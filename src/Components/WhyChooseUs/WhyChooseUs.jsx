import React from "react";
import { motion } from "framer-motion";
import { FiLoader } from 'react-icons/fi';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <RiMovie2Fill className="text-4xl text-red-500" />,
      title: "Wide Selection of Movies and TV Shows",
      description: "Access a vast library of movies and TV shows, including exclusive Netflix originals.",
    },
    {
      icon: <FaUsers className="text-4xl text-red-500" />,
      title: "Multiple User Profiles",
      description: "Share your account with family and friends by creating separate user profiles.",
    },
    {
      icon: <FaRegMoneyBillAlt className="text-4xl text-red-500" />,
      title: "Flexible Pricing Plans",
      description: "Choose from a variety of subscription plans tailored to fit your budget.",
    },
    {
      icon: <GiReceiveMoney className="text-4xl text-red-500" />,
      title: "Affordable Plans",
      description: "Enjoy affordable subscription plans with no hidden fees.",
    },
    {
      icon: <GiTakeMyMoney className="text-4xl text-red-500" />,
      title: "Easy Payment Process",
      description: "Conveniently pay for your subscription with various payment methods.",
    },
    {
      icon: <AiFillThunderbolt className="text-4xl text-red-500 " />,
      title: "Instant Delivery",
      description: "Experience instant delivery of your subscription upon payment.",
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 mt-5"
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 2, loop: Infinity, ease: "linear" }}
        >
        </motion.span>
       <span className="text-[1.6rem] text-red-400 flex"> Why Choose Our Plans &nbsp; <FaCrown className="w-8 h-8"/></span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md"
          >
            {reason.icon}
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-700">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
