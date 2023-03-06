import React from "react";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigation = useNavigate();

  function sendPlayerAddress(address) {
    if (address && address.length > 0) {
      startGame();
    } else {
      window.alert("Name is empty");
    }
  }

  function startGame(event) {
    navigation("/game");
  }

  function changePage() {}

  return { sendPlayerAddress, changePage };
};

export { useHome };
