import React from "react";
import "../styles/MainPage.css";
import background from "../assets/images/background.png";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

function MainPage() {
  return (
    <main
      className="main-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="circle"></div>
      <Header />
      <Main />
    </main>
  );
}

export default MainPage;
