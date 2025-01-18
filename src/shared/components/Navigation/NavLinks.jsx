import React from 'react';
import { NavLink } from 'react-router-dom';

import './style/NavLinks.css'

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        {/* al momento della creazione db sostituire con id veritiero */}
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">NEW PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks