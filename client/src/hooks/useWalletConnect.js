import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../services/welletConnect";

export default function useWalletConnect() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return {
    connect,
    disconnect,
    account,
  };
}

export { useWalletConnect };
