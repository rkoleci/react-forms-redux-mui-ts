import { createSlice } from "@reduxjs/toolkit";
import { timeListAdapter } from "./timeListAdapter";
import { updateTimeListThunk } from "../thunks/updateTimeListThunk";
import { UITimeList } from "../types";
import { UITimeListSelectors } from "./timeListSelectors";

const timeListSlice = createSlice({
    name: "timeListSlice",
    initialState: timeListAdapter.getInitialState(),
    reducers: {

        addNewTimeItem: (state,) => {
            timeListAdapter.addOne(state, {
                id: crypto.randomUUID(),
                name: '',
                from: new Date().toString(),
                to: new Date().toString()
            });
        },

        upsertName: (state, action) => {
            const { id } = action.payload;
            
            const existingItem = timeListAdapter.getSelectors().selectById(state, id)

            timeListAdapter.upsertOne(state, {
                ...existingItem,
                name: action.payload.value
            })

        },

        upsertFromPeriod: (state, action) => {
            const { id } = action.payload;
            
            const existingItem = timeListAdapter.getSelectors().selectById(state, id)

            timeListAdapter.upsertOne(state, {
                ...existingItem,
                from: action.payload.value
            })

        },

        upsertToPeriod: (state, action) => {
            const { id } = action.payload;
            
            const existingItem = timeListAdapter.getSelectors().selectById(state, id)

            timeListAdapter.upsertOne(state, {
                ...existingItem,
                to: action.payload.value
            })

        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(updateTimeListThunk.fulfilled, (state, action) => {
                timeListAdapter.setMany(state, action.payload.timeList)
            })
    }

});

export const {
    addNewTimeItem,
    upsertName,
    upsertFromPeriod,
    upsertToPeriod
} = timeListSlice.actions;

export const timeListSliceReducers = timeListSlice.reducer;