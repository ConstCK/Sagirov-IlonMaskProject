import React, { useEffect, useRef, useState } from "react";
import "../styles/Main.css";
import { useNavigate } from "react-router-dom";
import { getProfits } from "../api/dataService";
import { Line } from "react-lineto";

const Main = () => {
  const navigate = useNavigate();
  const refGoButton = useRef(null);
  const [profitsData, setProfitsData] = useState([]);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    setCoords([refGoButton.current.offsetLeft, refGoButton.current.offsetTop]);
    getProfits(setProfitsData);
  }, []);

  const handleGo = () => {
    navigate("#");
  };

  return (
    <main className="main">
      <div className="left-container">
        <div className="title">
          <h1 className="first-part-title">Путешествие</h1>
          <h3 className="second-part-title">на красную планету</h3>
        </div>
        <div className="go-link">
          <button ref={refGoButton} onClick={handleGo} className="go-btn">
            Начать путешествие
          </button>
        </div>
      </div>
      <div className="middle-container"></div>
      <div className="right-container">
        <div className="profits-table">
          <div className="profits-cell">
            <div>Мы</div>
            <div className="profits-data">{profitsData.position}</div>
            <div>на рынке</div>
          </div>
          <div className="profits-cell">
            <div>гарантируем</div>
            <div className="profits-data">{profitsData.safety}</div>
            <div>безопасность</div>
          </div>
          <div className="profits-cell">
            <div>календарик за</div>
            <div className="profits-data">
              {profitsData.calendar}
              <span className="year">г.</span>
            </div>
            <div>в подарок</div>
          </div>
          <div className="profits-cell">
            <div>путешествие за</div>
            <div className="profits-data">{profitsData.trip}</div>
            <div>дней</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
