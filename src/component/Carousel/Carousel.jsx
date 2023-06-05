import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://dkolopwjqarcp.cloudfront.net/Custom/Content/Banners/13/132_banner638211322727386086.jpg',
    'https://dkolopwjqarcp.cloudfront.net/Custom/Content/Banners/96/96_banner638174175130003871.png',
    'https://dkolopwjqarcp.cloudfront.net/Custom/Content/Banners/84/84_banner638149245357040474.png',
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="carousel">
      <ul className="image-list">
        {images.map((image, index) => (
          <li
            key={index}
            style={{
              display: index === currentIndex ? 'block' : 'none',
              width: '100%',
              height: '400px',
            }}
          >
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              style={{ width: '100%', height: '100%' }}
            />
          </li>
        ))}
      </ul>
      <div className="prev" onClick={goToPrevSlide}>
        &#10094;
      </div>
      <div className="next" onClick={goToNextSlide}>
        &#10095;
      </div>
      <ul className="nav-dots">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
