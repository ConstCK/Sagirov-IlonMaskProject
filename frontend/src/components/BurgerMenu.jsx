import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BurgerMenu.css";

const BurgerMenu = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handleBurgerMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <div className="burger">
      <div
        className={openedMenu ? "menuButtonOpened" : "menuButtonClosed"}
        onClick={handleBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={openedMenu ? "menuVisible" : "menuHidden"}>
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
          <Link to={"#"}>Контакты</Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
