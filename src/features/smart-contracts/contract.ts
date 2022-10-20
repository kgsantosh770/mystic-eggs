import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        return "blah"
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