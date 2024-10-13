import { createSlice } from "@reduxjs/toolkit";
import { timeListAdapter } from "./timeListAdapter";
import { updateTimeListThunk } from "../thunks/updateTimeListThunk";
import { UITimeList } from "../types";

const timeListSlice = createSlice({
    name: "timeListSlice",
    initialState: timeListAdapter.getInitialState(),
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(updateTimeListThunk.fulfilled, (state, action) => {
                timeListAdapter.setMany(state, action.payload.timeList)
            })
    }

});

export const {

} = timeListSlice.actions;

export const timeListSliceReducers = timeListSlice.reducer;