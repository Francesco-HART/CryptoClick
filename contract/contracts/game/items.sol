// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ItemsCollectibles is ERC1155, Ownable {
    mapping(uint256 => address) itemApprovals;
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowed;

    // modifier onlyOnwerOf(uint256 _id) {
    //     require(true);
    //     _;
    // }

    function balanceOf(address _owner) public view returns (uint256 _balance) {
        return ownerItemCount[_owner];
    }

    function ownerOf(uint256 _tokenId) public view returns (address _owner) {
        return itemToOwner[_tokenId];
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) private {
        Transfer(_from, _to, _tokenId);
    }

    function transfer(address _to, uint256 _tokenId)
        public
        onlyOwnerOf(_tokenId)
    {
        _transfer(msg.sender, _to, _tokenId);
    }

    function approve(address _to, uint256 _tokenId)
        public
        onlyOwnerOf(_tokenId)
    {
        itemApprovals[_tokenId] = _to;
        Approval(msg.sender, _to, _tokenId);
    }

    function takeOwnership(uint256 _tokenId) public {
        require(itemApprovals[_tokenId] == msg.sender);
        address owner = ownerOf(_tokenId);
        _transfer(owner, msg.sender, _tokenId);
    }
}
