import React from "react";
import "../styles/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <div className="left-container">
        <div className="title">
          <h1 className="first-part-title">Путешествие</h1>
          <h3 className="second-part-title">на красную планету</h3>
        </div>
        <div className="go-link">
          <button className="go-btn">Начать путешествие</button>
        </div>
      </div>
      <div className="right-container">sdsadsadsa</div>
    </main>
  );
};

export default Main;
