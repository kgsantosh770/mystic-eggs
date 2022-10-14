import { createSlice } from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state) => state === 'light' ? 'dark' : 'light'
    }
})


export const { toggle } = ThemeSlice.actions
export default ThemeSlice.reducer