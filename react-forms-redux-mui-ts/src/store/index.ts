import { configureStore } from '@reduxjs/toolkit';
import { timeListSliceReducers } from '../timeList/timeListSlices';

const store = configureStore({
  reducer: {
    timeList: timeListSliceReducers
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;