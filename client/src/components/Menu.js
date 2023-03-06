import React from "react";

const Menu = (props) => {
  const settingsFunction = () => {
    props.clickFunction("settings");
    props.stopTime();
  };
  const { clickFunction } = props;
  return (
    <div id="menus">
      <div id="menuLeft">
        <img
          alt="shop"
          id="shop"
          src={require("../img/Shop.png")}
          onClick={() => clickFunction("shop")}
        />
        <img
          alt="shop"
          id="shop"
          src={require("../img/Miner.png")}
          onClick={() => clickFunction("miner")}
        />
        <img
          alt="shop"
          id="shop"
          src={require("../img/Settings.png")}
          onClick={() => settingsFunction()}
        />
      </div>
      <div id="menuRight">
        <img
          alt="shop"
          id="shop"
          src={require("../img/About.png")}
          onClick={() => clickFunction("about")}
        />
        <img
          alt="shop"
          id="shop"
          src={require("../img/pc.png")}
          onClick={() => clickFunction("pcUpgrade")}
        />
      </div>
    </div>
  );
};

export default Menu;
