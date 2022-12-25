import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav>
     <h1>Techstart</h1>
     <main>

      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/#about"}>About</Link>
      <Link to={"/#brands"}>Brands</Link>
      <Link to={"/services"}>Services</Link>
     </main>

    </nav>
  )
}

export default Header;
