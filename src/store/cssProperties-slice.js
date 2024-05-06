import { createSlice } from "@reduxjs/toolkit";

export const cssPropertiesSlice = createSlice({
    name: "cssProperties",
    initialState:{
        data: [],
        activeValue: 0
    },
    reducers: {
        updateData: (state, action)=>{
            state.data = action.payload;
        },
        selectData: (state, action)=>{
            state.activeValue = action.payload;
        } 
    }
})

export const {updateData, selectData} = cssPropertiesSlice.actions;
export default cssPropertiesSlice.reducer;
