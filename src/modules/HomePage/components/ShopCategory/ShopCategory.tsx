import React from 'react';
import './ShopCategory.scss';

export const ShopCategory: React.FC = () => {
  return (
    <>
      <div className="shop-category">
        <div className="shop-category__wrapper">
          <h2 className="shop-category__header">Shop by category</h2>
          <div className="shop-category__card-wrapper">
            <div className="shop-category__card">
              <img
                src="img/categories/PhonesCategory.png"
                className="shop-category__image"
                alt=""
              />
              <p className="shop-category__name">Mobile phones</p>
              <p className="shop-category__amount">95 models</p>
            </div>
            <div className="shop-category__card">
              <img
                src="img/categories/TabletCategory.png"
                className="shop-category__image"
                alt=""
              />
              <p className="shop-category__name">Mobile phones</p>
              <p className="shop-category__amount">95 models</p>
            </div>
            <div className="shop-category__card">
              <img
                src="img/categories/AccessoriesCategory.png"
                className="shop-category__image"
                alt=""
              />
              <p className="shop-category__name">Mobile phones</p>
              <p className="shop-category__amount">95 models</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
