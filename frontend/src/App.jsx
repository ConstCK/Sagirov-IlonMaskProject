import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<TechPage />} />
        <Route path="/" element={<SchedulePage />} />
        <Route path="/" element={<GuaranteePage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/" element={<ContactsPage />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
