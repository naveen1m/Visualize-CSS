import { createSlice } from "@reduxjs/toolkit";

export const cssPropertiesSlice = createSlice({
    name: "cssProperties",
    initialState:{
        data: []
    },
    reducers: {
        updateData: (state, action)=>{
            state.data = action.payload;
        }
    }
})

export const {updateData} = cssPropertiesSlice.actions;
export default cssPropertiesSlice.reducer;
