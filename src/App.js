import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MainPage from "./Pages/mainPage.jsx";

function App() {
  require("dotenv").config();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS Last.fm Visualizer
        </a>
      </header>
      <MainPage userName="orleanth" />
    </div>
  );
}

export default App;
