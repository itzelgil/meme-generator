import React from "react";
import meme from ".//../images/meme.png";
import ".//../App.css";

export default function Header() {
  return (
    <header className="header">
      <img src={meme} className="header-image" alt="logo" />
      <h2 className="header-title">Meme generator</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}
