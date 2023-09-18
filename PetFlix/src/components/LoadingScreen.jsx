import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <img
        className="img-logo-loading-screen"
        src="/petflix-logo.png"
        alt="Petflix Logo"
      />
    </div>
  );
}

export default LoadingScreen;
