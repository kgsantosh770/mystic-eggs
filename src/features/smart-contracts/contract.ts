import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { useAppSelector } from "../../app/hooks";
import { ANIME_NFT_ABI, ANIME_NFT_CONTRACT_ADDRESS } from "../../constants/Constant";

type lastMintedNFTAddress = string;

interface InitialState {
    minting: boolean,
    error: string | undefined,
    lastMintedNFTAddress: lastMintedNFTAddress | undefined,
}

const initialState: InitialState = {
    minting: false,
    error: undefined,
    lastMintedNFTAddress: undefined,
}

export const mintAnimeNFT = createAsyncThunk(
    'contract/mintAnimeNFT',
    async () => {
        if (window.ethereum) {
            try {
                const animeContract = new ethers.Contract(ANIME_NFT_CONTRACT_ADDRESS, ANIME_NFT_ABI, useAppSelector((state) => state.wallet.signer));
                console.log("Going to pop wallet now to pay gas...")
                let nftTxn = await animeContract.mintAnimeNFT();
                await nftTxn.wait();
                console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
                return nftTxn.hash;
            } catch (error) {
                return "Unknown error occured. Please try agin after few minutes."
            }
        } else {
            return "Unknown error occured. Please try agin after few minutes."
        }

    }
)

const ContractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            mintAnimeNFT.pending,
            (state) => {
                state.minting = true;
            }
        )
        builder.addCase(
            mintAnimeNFT.fulfilled,
            (state, action: PayloadAction<lastMintedNFTAddress>) => {
                state.minting = false;
                state.lastMintedNFTAddress = action.payload;
            }
        )
        builder.addCase(
            mintAnimeNFT.rejected,
            (state, action) => {
                state.minting = false;
                state.error = action.error.message;
            }
        )
    }
})