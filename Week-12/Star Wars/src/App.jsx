// src/App.js
import React, { useState } from "react";
import StarshipList from "./components/StarshipList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <StarshipList />
    </div>
  );
};

export default App;
