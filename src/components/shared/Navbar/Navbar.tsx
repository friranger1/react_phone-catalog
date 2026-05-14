import './Navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <input type="checkbox" id="menu-toggle" className="navbar__checkbox" />

        <NavLink to="/" className="navbar__logo" />

        <label
          htmlFor="menu-toggle"
          className="navbar__action navbar__action--menu"
        />

        <div className="navbar__menu">
          <NavLink to="/" className="navbar__link">
            Home
          </NavLink>
          <NavLink to="/phones" className="navbar__link">
            Phones
          </NavLink>
          <NavLink to="/tablets" className="navbar__link">
            Tablets
          </NavLink>
          <NavLink to="/accessories" className="navbar__link">
            Accessories
          </NavLink>
        </div>

        <div className="navbar__actions">
          <NavLink
            to="/compare"
            className="navbar__action navbar__action--compare"
          />
          <NavLink
            to="/basket"
            className="navbar__action navbar__action--basket"
          />
        </div>
      </nav>
    </header>
  );
};
