// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../security/ownable.sol";

contract CryptoClickGame is Ownable {
    string public_key;

    function setPublicKey(string memory api_key) public onlyOwner {
        public_key = api_key;
    }

    function getPublicKey() public view returns (string memory api_key) {
        return public_key;
    }

    function convertPointInToken(uint128 nbOfPoints, string memory api_key)
        private
    {
        uint256 nbOfTokens;
    }
}
