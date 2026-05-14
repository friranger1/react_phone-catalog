import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { HomePage } from './modules/HomePage/HomePage';
import { Footer } from './components/shared/Footer';
import { Navbar } from './components/shared/Navbar';
import { ProductsPage } from './modules/ProductsPage';
import { NotFoundPage } from './modules/NotFoundPage';

export const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<ProductsPage category="phones" />} />
          <Route
            path="/tablets"
            element={<ProductsPage category="tablets" />}
          />
          <Route
            path="/accessories"
            element={<ProductsPage category="accessories" />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
