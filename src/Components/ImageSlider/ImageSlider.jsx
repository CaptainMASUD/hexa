import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import s from '../../images/s.jpg';
import a from '../../images/a.jpg';
import d from '../../images/d.jpg';
import f from '../../images/f.jpg';
import g from '../../images/g.jpg';
import j from '../../images/j.jpg';

const ImageCarousel = () => {
  const sliderRef = useRef();

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const images = [s, a, d, f, g, j]; // Array containing all image paths

  const imageStyle = {
    width: '200px',
    height: '280px',
    margin: '0 auto',
    borderRadius: '5px',
  };

  const containerStyle = {
    maxWidth: '88%', // Set maximum width for large devices
    margin: '0 auto',
  };

  const dotStyle = (active) => ({
    width: '10px',
    height: '10px',
    backgroundColor: active ? 'red-400' : 'slate-600',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 5px',
  });

  const [imagesLoaded, setImagesLoaded] = useState(Array(6).fill(false));

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <button onClick={goToPrev}>
        <FaChevronLeft />
      </button>
    ),
    nextArrow: (
      <button onClick={goToNext}>
        <FaChevronRight />
      </button>
    ),
    customPaging: (i) => (
      <div style={dotStyle(i === 0)}></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-5" style={containerStyle}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            style={{ margin: '0 8px', width: 'calc(100% / 6)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={imageStyle}
              onLoad={() => handleImageLoad(index)}
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
