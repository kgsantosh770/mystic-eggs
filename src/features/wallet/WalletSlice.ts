import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sign } from "crypto";
import { ethers } from 'ethers';
import { loadavg } from "os";

declare global {
    interface Window {
        ethereum: any,
    }
}

type walletAddress = string;

interface WalletState {
    provider: any | undefined,
    signer: string | undefined,
    walletAddress: walletAddress | undefined,
    loading: boolean,
    error: string | undefined,
}

const initialState: WalletState = {
    provider: undefined,
    signer: undefined,
    walletAddress: undefined,
    loading: false,
    error: undefined,
}


export const connectWallet = createAsyncThunk(
    'wallet/connectWallet',
    async () => {
        if (window.ethereum) {  
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner();
            const walletAddress = await signer.getAddress();
            return walletAddress;
        }
        return "Oops! Metamask not detected"
    }
)

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            connectWallet.pending,
            (state) => {
                state.loading = true;
            }
        )
        builder.addCase(
            connectWallet.fulfilled,
            (state, action: PayloadAction<walletAddress>) => {
                state.loading = false;
                state.walletAddress = action.payload;
            }
        )
        builder.addCase(
            connectWallet.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong.';
            }
        )
    }

})

export const { } = walletSlice.actions;
export default walletSlice.reducer;