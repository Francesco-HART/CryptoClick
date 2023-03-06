import React from "react";
import "./App.css";
import Router from "./Route";
import { AuthProvider } from "./services/stores/auth/AuthProvider";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { useNFTContract } from "./hooks/useNFTContract";

const App = () => {
  function getLibrary(provider) {
    return new Web3(provider);
  }

  const { mintNft } = useNFTContract();

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthProvider>
          <button
            onClick={async () =>
              await mintNft("0xA684590f307f84d770F3bccEDEA205C6B696F892")
            }
          >
            {" "}
            Click ici roh
          </button>
          <Router />
        </AuthProvider>
      </Web3ReactProvider>
    </>
  );
};

export default App;
