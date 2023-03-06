import React from "react";
import {
  SMART_CONTRACT_NETWORK,
  SMART_CONTRACT_ADDRESS,
  WALLET_IMPORTED_ON_STARTON,
  META_DATA_CID,
} from "../config/nftCryptoClick";

import { useStarton } from "./useStarton";

const useNFTContract = () => {
  const { starton } = useStarton();
  async function mintNft(receiverAddress) {
    const nft = await starton.post(
      `/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/call`,
      {
        functionName: "safeMint",
        signerWallet: WALLET_IMPORTED_ON_STARTON,
        speed: "low",
        params: [receiverAddress, META_DATA_CID],
      }
    );
    return nft.data;
  }
  return { mintNft };
};

export { useNFTContract };
