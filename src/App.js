import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MainPage from "./Pages/mainPage.jsx";

function App() {
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
          Learn React
        </a>
      </header>
      <div>
        <MainPage userName="orleanth" />
      </div>
    </div>
  );
}

export default App;
