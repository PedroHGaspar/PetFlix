import React, { useEffect, useState } from 'react';
import '../App.css'
function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img className="img-logo-loading-screen" src="/petflix-logo.png" alt="Petflix Logo" />
      </div>
    );
  }

  return <div>AAAAAAAAAAAAAAAAAAAAAA</div>;
}

export default LoadingScreen;
