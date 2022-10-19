// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract AnimeNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("AnimeNFT", "ANIME") {}

    string FirstWord = "Valorant-";
    string[] SecondWord = [
        "Astra",
        "Breach",
        "Brimstone",
        "Chamber",
        "Cypher",
        "Jett",
        "Kay/O",
        "Killjoy",
        "Neon",
        "Omen",
        "Phoenix",
        "Raze",
        "Reyna",
        "Sage",
        "Skye",
        "Sova",
        "Viper",
        "Yoru"
    ];

    function pickRandomWord(string[] memory _wordArray, uint256 _tokenId)
        public
        pure
        returns (string memory)
    {
        uint256 rand = random(
            string(abi.encodePacked("RANDOM_WORD", Strings.toString(_tokenId)))
        );
        rand = rand % _wordArray.length;
        return _wordArray[rand];
    }

    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }

    function nftData(uint256 _tokenId)
        internal
        view
        returns (string memory)
    {
        string memory player = string(
            abi.encodePacked(FirstWord, pickRandomWord(SecondWord, _tokenId))
        );
        string
            memory baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";
        string memory finalSvg = string(
            abi.encodePacked(baseSvg, player, "</text></svg>")
        );
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name":"',
                        player,
                        '", "description": "Valorant anime characters onboard",',
                        '"image": data:image/svg+xml;base64,',
                        Base64.encode(bytes(finalSvg))
                    )
                )
            )
        );
        return string(
            abi.encodePacked("data:application/json;base64,", json)
        );
    }

    function makeAnimeNFT() public {
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);
        tokenURI(newItemId);
        _tokenIds.increment();
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(_tokenId));
        string memory nft = nftData(_tokenId);
        console.log("\n--------------------");
        console.log(nft);
        console.log("--------------------\n");
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            _tokenId,
            msg.sender
        );
        return nft;
    }
}
