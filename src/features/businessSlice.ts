import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface BusinessState {
  startDate?: string;
  endDate?: string;
}

// Define the initial state using that type
const initialState: BusinessState = {};

export const businessSlice = createSlice({
  name: 'business',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = businessSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStartDate = (state: RootState) => state.business.startDate;
export const selectEndDate = (state: RootState) => state.business.endDate;

export default businessSlice.reducer;
