import { createSlice } from "@reduxjs/toolkit";
import { UIFormErrors } from "../types";

const initialState: UIFormErrors.FormErrorState = {
    errorMessages: [],
    inputErrors: {}
}


export const formErrorsSlice = createSlice({
    name: 'formErrorsSlice',
    initialState,
    reducers: {
        setFormErrors: (state, action) => {
            state.errorMessages = action.payload.errorMessages
            state.inputErrors = action.payload.inputErrors
        },
        resetFormErrors: (state) => {
            state.errorMessages = []
            state.inputErrors = {}
        }
    }
})

export const {
    setFormErrors,
    resetFormErrors
} = formErrorsSlice.actions

export const formErrorsSliceReducer = formErrorsSlice.reducer