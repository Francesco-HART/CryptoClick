import React from "react";

const Miner = (props) => {
  const { coinMine, deletePage } = props;
  return (
    <div id="divMiner">
      <div id="quitBar">
        <img
          alt="shop"
          id="quitIcons"
          src={require("../img/dots.png")}
          onClick={() => deletePage("miner")}
        />
      </div>
      <div id="Miner" onClick={coinMine}>
        <img
          alt="shop"
          id="pioche"
          draggable="false"
          src={require("../img/pickaxe.png")}
        />
        <img
          alt="shop"
          id="coin"
          draggable="false"
          src={require("../img/coin.png")}
        />
        <img
          alt="shop"
          id="eclats"
          draggable="false"
          src={require("../img/eclats.png")}
        />
      </div>
    </div>
  );
};

export default Miner;
