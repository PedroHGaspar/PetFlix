import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileScreen from "./components/ProfileScreen";
import HomeGatos from "./components/HomeGatos";
import HomeCachorros from "./components/HomeCachorros";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileScreen />} />
        <Route path="/homegatos" element={<HomeGatos />} />
        <Route path="/HomeCachorros" element={<HomeCachorros />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
