import React, { useState } from "react";
import memesData from "../memesdata";
import ".//../App.css";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getRandomMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="input-container">
      <div className="form">
        <input type="text" placeholder="Type something" className="input" />{" "}
        <input type="text" placeholder="Type something 2" className="input" />
        <button className="meme-btn" onClick={getRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="meme-img" className="meme-img" />
    </div>
  );
}
