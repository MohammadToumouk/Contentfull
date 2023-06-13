import React, { useState, useEffect } from 'react';
import './ImageSliderForProperty.css';

const ImageSliderForProperty = ({ images, title, slideDuration = 2500 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
  useEffect(() => {
    const timer = setInterval(goToNextSlide, slideDuration);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, slideDuration]);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex + images.length - 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-image">
        <div className="slider-overlay"></div>
          <img src={images[currentImageIndex].url} alt="Slider" />
        </div>
        <div className="slider-pagination">
          {images?.fields.file.url.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentImageIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <div className="slider-title">{title}</div>
        <div className="slider-arrows">
          <button className="arrow left" onClick={goToPreviousSlide}>
          &#60;
          </button>
          <button className="arrow right" onClick={goToNextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderForProperty;
