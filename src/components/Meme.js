import React, { useState } from "react";
import memesData from "../memesdata";
import ".//../App.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1otk96.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getRandomMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} alt="meme-img" className="meme-img" />
    </div>
  );
}
