// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AnimeNFT is ERC721  {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721 ('AnimeNFT', 'ANIME') {}

    function makeAnimeNFT() public{
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        tokenURI(newItemId);
        _tokenIds.increment();
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory){
        require(_exists(_tokenId));
        console.log("An NFT w/ ID %s has been minted to %s", _tokenId, msg.sender);
        return 'https://jsonkeeper.com/b/ELIG';
    }
}