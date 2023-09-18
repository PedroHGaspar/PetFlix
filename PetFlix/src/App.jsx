import React from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadingScreen />
      </header>
    </div>
  );
}

export default App;
