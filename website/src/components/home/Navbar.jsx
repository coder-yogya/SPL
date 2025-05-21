import React, { useState } from 'react';
import './Navbar.css';
import logo from '/assets/images/logo.png';
import { Home, Info, CalendarToday, Assignment } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <img src={logo} alt="logo" className="navbar-logo" />
      <h2 className="navbar-title">
        Sangharsh Premier <br className="mobile-break" /> League 2025 
      </h2>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active-url' : '')}
        >
          <IconButton className="nav-icon-button" aria-label="home">
            <Home className="nav-icon" />
          </IconButton>
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active-url' : '')}
        >
          <IconButton className="nav-icon-button" aria-label="about">
            <Info className="nav-icon" />
          </IconButton>
          About
        </NavLink>

        <NavLink
          to="/register"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active-url' : '')}
        >
          <IconButton className="nav-icon-button" aria-label="registration">
            <Assignment className="nav-icon" />
          </IconButton>
          Registration
        </NavLink>

        <NavLink
          to="/schedules"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? 'active-url' : '')}
        >
          <IconButton className="nav-icon-button" aria-label="schedules">
            <CalendarToday className="nav-icon" />
          </IconButton>
          Schedules
        </NavLink>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Menu toggle">
        <span className="bar top" />
        <span className="bar middle" />
        <span className="bar bottom" />
      </button>
    </nav>
  );
}