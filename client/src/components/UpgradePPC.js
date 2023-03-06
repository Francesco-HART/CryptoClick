import React from "react";

const Upgrade = (props) => {
  const verifCoin = () => {
    var price = Math.floor(
      props.prix * Math.pow(1.5, props.upgradeLvl[props.id])
    );
    var gain = props.gain;
    if (props.myCoin >= price) {
      props.gameFunction(price, gain, props.id, "ppc");
    } else {
      window.alert("NON");
    }
  };

  const { name, prix, upgradeLvl, src, id, gain } = props;
  return (
    <div className="upgrade" onClick={verifCoin}>
      <img alt="shop" className="imgUpgrade" src={src} />
      <div className="infoUpgrade">
        <p className="nameUpgrade">{name}</p>
        <p className="infoUpgrade">
          price : {Math.floor(prix * Math.pow(1.5, upgradeLvl[id]))}
        </p>
        <p className="infoUpgrade">gain : {gain}</p>
        <p className="infoUpgrade">Lvl : {upgradeLvl[id]}</p>
      </div>
    </div>
  );
};
export default Upgrade;
