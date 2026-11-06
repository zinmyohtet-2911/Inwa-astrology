import React from "react";
import Logo from "./logo.png";


export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={Logo} alt="Inwa Astrology Logo" className="header-logo" />
        <h1 className="header-title">Inwa Astrology</h1>
      </div>
    </header>
  );
}