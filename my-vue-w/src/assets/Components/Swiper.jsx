import React, { useState, useEffect } from 'react';
import './designs/swiper.css';

const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://senat.uz/media/post/slider/4e0pBWuwAPRDDLj5rscelT4ty0E1QW.jpg",
      caption: "Oltiariq tumanida Korrupsiyaga qarshi kurashish bo‘yicha milliy kengashning sayyor majlisi bo‘lib o‘tdi"
    },
    {
      src: "https://senat.uz/media/post/slider/0oTnsGChQp6lXCKdvju8PyiBfibVeT.jpg",
      caption: "Farg‘ona viloyati hududlarini ijtimoiy-iqtisodiy rivojlantirishga qaratilgan dasturlar ijrosi muhokama qilindi"
    },
    {
      src: "https://senat.uz/media/post/slider/4e0pBWuwAPRDDLj5rscelT4ty0E1QW.jpg",
      caption: "Oltiariq tumanida Korrupsiyaga qarshi kurashish milliy kengashining sayyor yig‘ilishi bo‘lib o‘tdi"
    },
    {
      src: "https://senat.uz/media/post/slider/xtPmsEkf6yQrCGORTaT0VtWCFdsGrp.jpg",
      caption: "Senat Raisi boshchiligidagi ishchi guruh Farg‘ona viloyatida o‘rganishlar olib bordi"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="swiper-container">
      <div className="swiper-slide">
        <img 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex}`} 
          className="swiper-image"
        />
        <div className="swiper-caption">
          {images[currentIndex].caption}
        </div>
      </div>
      
      <div className="swiper-indicators">
        {images.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`swiper-indicator ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;