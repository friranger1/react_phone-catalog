import './HomePage.scss';
import React from 'react';
import { ProductCard } from '../../components/shared/ProductCard';
import { BannerSlider } from './components/BanerSlider';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="products">
        <div className="products__content">
          <h1 className="products__header">Welcome to Nice Gadgets store!</h1>
          <BannerSlider />
          <div className="products__container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};
