import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { TimeListApiClient } from "../api/timeListApiClient";

export const updateTimeListThunk = createAsyncThunk<
    TimeListApiClient.TimeListResponse,
    { timeList: TimeListApiClient.TimeListRequest },
    { rejectValue: Error, state: AppState }
>(
    "timeList/updateTimeList",
    async (req, { rejectWithValue }) => {
        try {
            const response = await TimeListApiClient.updateTimeListReqest(req.timeList);
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);
