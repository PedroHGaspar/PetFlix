import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ProfileScreen() {
  const navigate = useNavigate();

  const handleHomeGatosClick = () => {
    navigate("/homegatos");
  };

  const handleHomeCachorrosClick = () => {
    navigate("/homecachorros");
  };

  return (
    <div className="align-home-text-images">
      <div>
        <span className="quem-assiste">Quem está assistindo?</span>
      </div>
      <div className="loading-content">
        <div>
          <div
            className="loading-button-cachorro cachorro-perfil"
            style={{ backgroundImage: `url('/cachorro.jpg')` }}
            onClick={handleHomeCachorrosClick}
          >
          </div>
            <span className="nome-perfil">Cachorro</span>
        </div>
        <div>
          <div
            className="loading-button-gato gato-perfil"
            style={{ backgroundImage: `url('/gato.jpg')` }}
            onClick={handleHomeGatosClick}
          >
          </div>
            <span className="nome-perfil">Gato</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;



// <img
// className="img-logo-loading-screen"
// src="/petflix-logo.png"
// alt="Petflix Logo"
// />