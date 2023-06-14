import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // You can define your own CSS styles for the slider

const images = [{
    id: 1, url: 'https://gulfbusiness.com/wp-content/uploads/2021/07/20210623-mth_wsa_Lamborgini_V12i-Back_a04.jpg',
    alt: 'Image 1'
    },
    {
    id: 2, url: 'https://ellingtonproperties.ae/wp-content/uploads/Villas-for-Sale-in-Dubai-Experience-Luxury-Living-01.jpg',
    alt: 'Image 2'
    },
    {
    id: 3, url: 'https://images.squarespace-cdn.com/content/v1/5eff4cc093c6c77d78918171/1598643214572-IKCEOF7BTK48M24PYY9Q/Miraa3.JPG',
    alt: 'Image 3'
    },
    {
    id: 4, url: 'https://mlshkd6fvbce.i.optimole.com/cb:PRf_.12de6/w:696/h:424/q:mauto/https://homesoftherich.net/wp-content/uploads/2022/05/Screen-Shot-2022-05-27-at-1.24.08-PM.png',
    alt: 'Cabine House' 
    }   
];

const ImageSlider = ({ title = "Luxury Living at its Finest. Find Your Haven.", slideDuration = 2500 }) => {
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
        <div className="slider-overlay" id='testTest'></div>
          <img id='carouselImages' src={images[currentImageIndex].url} alt="Slider" />
        </div>
        <div className="slider-pagination">
          {images.map((_, index) => (
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

export default ImageSlider;
