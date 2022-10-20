import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ethers } from 'ethers';

declare global {
    interface Window {
        ethereum: any,
    }
}

interface Payload {
    provider: ethers.providers.Provider | undefined,
    signer: ethers.Signer | undefined,
    walletAddress: string | undefined,
}

interface WalletState extends Payload{
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
            return {
                provider: provider,
                signer: signer,
                walletAddress: walletAddress
            };
        }
        throw Error("Oops! Metamask not detected");
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
            (state, action: PayloadAction<Payload>) => {
                state.loading = false;
                const {provider, signer, walletAddress} = action.payload
                state.provider = provider;
                state.signer = signer;
                state.walletAddress = walletAddress;
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

export default walletSlice.reducer;