import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../reducer/ThemeReducer";

export default configureStore({
    reducer: {
        theme: ThemeReducer,
    },
})