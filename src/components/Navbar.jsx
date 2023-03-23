import React from 'react';
import "../styles/Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
   <>
        <div id="navbar">
            <div id="nav-body">
                <img id="nav-img" src={logo} alt="logo" />
            </div>
        </div>
   </>
  )
}

export default Navbar