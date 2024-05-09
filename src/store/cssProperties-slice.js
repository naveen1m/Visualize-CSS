import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { enableMapSet } from "immer";

enableMapSet();
export const cssPropertiesSlice = createSlice({
  name: "cssProperties",
  initialState: {
    data: new Map([["key", "value"]]),
    activeValue: new Map([["default", 0]]),
  },
  reducers: {
    updateData: (state, action) => {
      const updatedMap = new Map([...state.data]);
      updatedMap.set(action.payload.title, action.payload.data)
      console.log("payload", updatedMap);
      state.data = updatedMap;
      // console.log("size", state.data.size);
      // console.log("state after update", state.data);
    },
    selectData: (state, action) => {
      // console.log("select data",action.payload);
      const activeIndexMap = new Map([...state.activeValue]);
      activeIndexMap.set(action.payload.label, action.payload.index)
      state.activeValue = activeIndexMap;
      console.log("state.activeValue",state.activeValue)
    },
  },
});

export const { updateData, selectData } = cssPropertiesSlice.actions;
export default cssPropertiesSlice.reducer;
