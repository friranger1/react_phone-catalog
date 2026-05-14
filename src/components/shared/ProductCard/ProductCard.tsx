import React from 'react';
import './ProductCard.scss';

export const ProductCard = () => {
  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img
          className="product-card__image"
          src="img/phones/apple-iphone-11/black/00.webp"
          alt="Apple iPhone Xs 64GB Silver"
        />
      </div>

      <h2 className="product-card__title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h2>

      <div className="product-card__price-container">
        <span className="product-card__price">$799</span>
        <span className="product-card__price-old">$899</span>
      </div>

      <div className="product-card__divider" />

      <ul className="product-card__specs">
        <li className="product-card__specs-item">
          <span className="product-card__specs-label">Screen</span>
          <span className="product-card__specs-value">5.8" OLED</span>
        </li>
        <li className="product-card__specs-item">
          <span className="product-card__specs-label">Capacity</span>
          <span className="product-card__specs-value">64 GB</span>
        </li>
        <li className="product-card__specs-item">
          <span className="product-card__specs-label">RAM</span>
          <span className="product-card__specs-value">4 GB</span>
        </li>
      </ul>

      <div className="product-card__buttons">
        <button className="product-card__button product-card__button--add">
          Add to cart
        </button>
        <button
          className="product-card__button product-card__button--favorite"
          aria-label="Add to favorite"
        ></button>
      </div>
    </article>
  );
};
