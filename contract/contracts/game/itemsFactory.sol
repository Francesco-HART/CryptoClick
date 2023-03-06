// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./security/ownable.sol";

contract Items is ERC1155, Ownable {
    // Hashes of meme pictures on IPFS
    string[] public hashes;
    // Mapping for enforcing unique hashes
    mapping(string => bool) _hashExists;

    // Mapping from NFT token ID to owner
    mapping(uint256 => address) private _tokenOwner;

    // Mapping from hash to NFT token ID
    mapping(string => address) private _hashToken;

    constructor() public ERC1155("https://game.example/api/item/{id}.json") {}

    function mint(string memory _hash, string memory _uri) public {
        require(!_hashExists[_hash], "Token is already minted");
        require(bytes(_uri).length > 0, "uri should be set");
        hashes.push(_hash);
        uint256 _id = hashes.length - 1;
        _mint(msg.sender, _id, 1, _uri, "");
        _hashExists[_hash] = true;
    }

    function getMemesCount() public view returns (uint256 count) {
        return hashes.length;
    }

    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory _uri)
    {
        return _tokenURI(_tokenId);
    }

    function setTokenUri(uint256 _tokenId, string memory _uri)
        public
        onlyOwner
    {
        _setTokenURI(_tokenId, _uri);
    }

    function safeTransferFromWithProvision(
        address payable from,
        address to,
        uint256 id,
        uint256 amount,
        uint256 price
    ) public payable returns (bool approved) {
        setApprovalForAll(to, true);
        safeTransferFrom(from, to, id, amount, "0x0");
        return isApprovedForAll(from, to);
        //from.transfer(price);
    }
}
