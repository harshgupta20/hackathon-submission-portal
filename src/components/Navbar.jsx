import React from 'react';
import "../styles/Navbar.css";
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
        <div id="navbar">
            <div id="nav-body">
              <Link to="/">

                <img id="nav-img" src={logo} alt="logo" />
              </Link>
            </div>
        </div>
   </>
  )
}

export default Navbar