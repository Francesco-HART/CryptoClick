import React from "react";

const InfoBar = (props) => {
  const { playerName, coin, ppc, pps } = props;
  return (
    <div id="infoBar">
      <p>Bonjour {playerName} !</p>
      <div className="coinDiv">
        <p>{coin}</p>
        <img alt="shop" className="miniCoin" src={require("../img/coin.png")} />
      </div>
      <div className="coinDiv">
        <img alt="shop" className="miniCoin" src={require("../img/coin.png")} />
        <p>per click: {ppc}</p>
      </div>
      <div className="coinDiv">
        <img alt="shop" className="miniCoin" src={require("../img/coin.png")} />
        <p>per seconds: {pps}</p>
      </div>
    </div>
  );
};

export default InfoBar;
