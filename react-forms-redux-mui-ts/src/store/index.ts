import { configureStore } from '@reduxjs/toolkit';
import { timeListSliceReducers } from '../timeList/timeListSlices';
import { formErrorsSliceReducer } from '../formErrors/formErrorsSlice';

const store = configureStore({
  reducer: {
    timeList: timeListSliceReducers,
    formErrors: formErrorsSliceReducer
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;