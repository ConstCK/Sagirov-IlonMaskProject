import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="link">
        <Link to={"/"}>Главная</Link>
      </div>
      <div className="link">
        <Link to={"#"}>Технология</Link>
      </div>
      <div className="link">
        <Link to={"#"}>График полетов</Link>
      </div>
      <div className="link">
        <Link to={"#"}>Гарантии</Link>
      </div>
      <div className="link">
        <Link to={"#"}>О компании</Link>
      </div>
      <div className="link">
        {" "}
        <Link to={"#"}>Контакты</Link>
      </div>
    </div>
  );
};

export default NavBar;
