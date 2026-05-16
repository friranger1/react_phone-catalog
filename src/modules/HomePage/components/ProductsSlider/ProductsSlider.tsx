import { ProductCard } from '../../../../components/shared/ProductCard';
import './ProductsSlider.scss';
import React from 'react';

export const ProductsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const products = [
    'img/imageSlider/Banner 01.png',
    'img/imageSlider/Banner 02.png',
    'img/imageSlider/Banner 03.png',
    'img/imageSlider/Banner 03.png',
    'img/imageSlider/Banner 03.png',
    'img/imageSlider/Banner 03.png',
    'img/imageSlider/Banner 03.png',
  ];

  let touchStart = 0;
  let touchEnd = 0;
  const visibleCards = 4;
  const maxIndex = products.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return prev;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <section className="products-slider">
      <div className="products-slider__container">
        <div className="products-slider__container--header">
          <h2 className="products-slider__title">Brand new models</h2>

          <div className="products-slider__container--buttons">
            <button
              className="products-slider__button products-slider__button--left"
              aria-label="Previous slide"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            />

            <button
              className="products-slider__button products-slider__button--right"
              aria-label="Next slide"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
            />
          </div>
        </div>

        <div
          className="products-slider__window"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="products-slider__cards"
            style={
              {
                '--current-index': currentIndex,
                display: 'flex',
              } as React.CSSProperties
            }
          >
            {products.map((image, index) => {
              return (
                <div key={index} className="products-slider__card-wrapper">
                  <ProductCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
