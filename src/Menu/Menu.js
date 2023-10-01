import React from 'react';
import {  Link } from 'react-router-dom';

function Menu() {
  return (
      <nav
        role="navigation"
        aria-label="Main menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login" role="link" aria-label="LoginPage">Login</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Menu;