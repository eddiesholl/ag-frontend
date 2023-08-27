import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface BeefState {
  numberOfAnimals?: number;
  avgLiveweight?: number;
}

const initialState: BeefState = {};

export const beefSlice = createSlice({
  name: 'beef',
  initialState,
  reducers: {
    setNumberOfAnimals: (state, action: PayloadAction<string>) => {
      state.numberOfAnimals = Number.parseInt(action.payload);
    },
    setAvgLiveweight: (state, action: PayloadAction<string>) => {
      state.avgLiveweight = Number.parseFloat(action.payload);
    },
  },
});

export const { setNumberOfAnimals, setAvgLiveweight } = beefSlice.actions;

export const selectNumberOfAnimals = (state: RootState) =>
  state.beef.numberOfAnimals;
export const selectAvgLiveweight = (state: RootState) =>
  state.beef.avgLiveweight;
export const selectTotalAnimalWeight = (state: RootState) =>
  (selectNumberOfAnimals(state) || 0) * (selectAvgLiveweight(state) || 0);
export const selectAnimalEmissions = (state: RootState) =>
  selectTotalAnimalWeight(state) * 10;

export default beefSlice.reducer;
