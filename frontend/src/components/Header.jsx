import React from "react";
import "../styles/Header.css";
import NavBar from "./NavBar.jsx";
import logo from "../assets/images/SpaceX-Logo.png";
import BurgerMenu from "./BurgerMenu.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="desktop">
        <NavBar />
      </div>
      <div className="mobile">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
