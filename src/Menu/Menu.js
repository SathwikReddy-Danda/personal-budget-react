import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav
        role = "navigation"
        aria-label="Main menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
    >
      <ul>
        <li><Link itemProp="/">Home</Link></li>
        <li><Link itemProp="/about">About</Link></li>
        <li><Link itemProp="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;