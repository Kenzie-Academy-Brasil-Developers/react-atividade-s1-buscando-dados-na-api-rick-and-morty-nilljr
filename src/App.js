import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import CharCard from "./components/CharCard";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
