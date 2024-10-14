import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { TimeListApiClient } from "../api/timeListApiClient";
import { UITimeListSelectors } from "../timeList/timeListSelectors";
import { validateTimeList } from "../timeList/validator";
import { setFormErrors } from "../formErrors/formErrorsSlice";
import { FormErrorsSelectors } from "../formErrors/formErrorsSelectors";

export const updateTimeListThunk = createAsyncThunk<
    TimeListApiClient.TimeListResponse,
    void,
    { rejectValue: any, state: AppState }
>(
    "timeList/updateTimeList",
    async (req, thunkApi) => {
        const timeList = UITimeListSelectors.selectAll(thunkApi.getState())

        const { errorMessages, inputErrors } = validateTimeList(timeList)
        thunkApi.dispatch(setFormErrors({
            errorMessages,
            inputErrors
        }))

        const isDraftValid = FormErrorsSelectors.isFormValid(thunkApi.getState())
        if (isDraftValid) {

            try {
                const response = await TimeListApiClient.updateTimeListReqest({ timeList });
                return response;
            } catch (error: any) {
                return thunkApi.rejectWithValue(error);
            }

        } else {
            return thunkApi.rejectWithValue({});
        }

    }
);
