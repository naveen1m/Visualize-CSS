import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { enableMapSet } from "immer";

enableMapSet();
export const cssPropertiesSlice = createSlice({
  name: "cssProperties",
  initialState: {
    data: new Map([["key", "value"]]),
    activeValue: 0,
  },
  reducers: {
    updateData: (state, action) => {
      //   console.log("action", action.payload.title, action.payload.data);
      //   console.log("state", state.data);
      //   const newData = new Map();
      //   state.set(action.payload.title, action.payload.data);
      console.log("payload", action.payload);
      state.data = action.payload;

      // console.log("size", state.data.size);
      console.log("state after update", state.data);
    },
    selectData: (state, action) => {
      state.activeValue = action.payload;
    },
  },
});

export const { updateData, selectData } = cssPropertiesSlice.actions;
export default cssPropertiesSlice.reducer;
