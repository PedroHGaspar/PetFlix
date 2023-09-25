import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LoadingScreen() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleHomeCachorrosClick = () => {
    navigate("/homecachorros");
  };

  return (
    <div className="align-home-text-images">
      <div>
        <span>Quem está assistindo?</span>
      </div>
      <div className="loading-content">
        <div
          className="loading-button-cachorro cachorro-perfil"
          style={{ backgroundImage: `url('/cachorro.jpg')` }}
          onClick={handleHomeClick}
        >

        </div>
        <div
          className="loading-button-gato gato-perfil"
          style={{ backgroundImage: `url('/gato.jpg')` }}
          onClick={handleHomeCachorrosClick}
        >

        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;



// <img
// className="img-logo-loading-screen"
// src="/petflix-logo.png"
// alt="Petflix Logo"
// />