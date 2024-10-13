import { createSlice } from "@reduxjs/toolkit";
import { timeListAdapter } from "./timeListAdapter";

const timeListSlice = createSlice({
    name: "timeListSlice",
    initialState: timeListAdapter.getInitialState(),
    reducers: {
       
      
    },
    
});

export const {
   
} = timeListSlice.actions;

export const timeListSliceReducers = timeListSlice.reducer;