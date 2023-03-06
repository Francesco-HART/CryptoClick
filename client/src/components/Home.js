import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const { sendPlayerAddress, changePage } = useHome();

  return (
    <div className="App">
      <div id="title">
        <a href="/">Crypto Click</a>
      </div>
      <Login startGame={sendPlayerAddress} />
      <video
        poster="https://zupimages.net/up/19/11/nwzt.png"
        id="bgvid"
        playsInline=""
        autoPlay=""
        muted=""
        loop
      >
        <source
          src="https://giant.gfycat.com/UnfoldedRemorsefulJackal.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default Home;
