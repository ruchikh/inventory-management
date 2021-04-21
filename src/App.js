import React from "react";
import "./App.css";
import Inventory from "./components/Inventory";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Inventory />
    </div>
  );
}

export default App;
