import React from 'react'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'


const injected = new WalletConnectConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

export {injected }