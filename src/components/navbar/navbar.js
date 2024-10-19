import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='/logo-min.png' alt='logo'/>
      </div>
      <div className="navbar-items">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('products')}>
            Products
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'products' ? 'show' : ''}`}>
            <a href="/">Product 1</a>
            <a href="/">Product 2</a>
            <a href="/">Product 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('solutions')}>
            Solutions
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'solutions' ? 'show' : ''}`}>
            <a href="/">Solution 1</a>
            <a href="/">Solution 2</a>
            <a href="/">Solution 3</a>
          </div>
        </div>
        <a href="/" className="nav-link">Developers</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown('resources')}>
            Resources
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className={`dropdown-content ${activeDropdown === 'resources' ? 'show' : ''}`}>
            <a href="/">Resource 1</a>
            <a href="/">Resource 2</a>
            <a href="/">Resource 3</a>
          </div>
        </div>
        <a href="/" className="nav-link">Pricing</a>
      </div>
      <div className="navbar-buttons">
        {!props.isLogin && <Link to={'/login'}><button className="sign-in">Sign in</button></Link>}
        <button className="contact-sales">Contact sales</button>
      </div>
    </nav>
  );
};

export default Navbar;