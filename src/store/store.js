import { configureStore } from "@reduxjs/toolkit";
import cssPropertiesReducer from "./cssProperties-slice";

export default configureStore({
    reducer: {
        cssProperties: cssPropertiesReducer,
    },
});