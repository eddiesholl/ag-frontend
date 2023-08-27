import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ValidationResult } from '../utils/validation';
import { stringToFloat, stringToInt } from '../utils/parse';

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
      state.numberOfAnimals = stringToInt(action.payload);
    },
    setAvgLiveweight: (state, action: PayloadAction<string>) => {
      state.avgLiveweight = stringToFloat(action.payload);
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
export const selectNumberOfAnimalsValid = (state: RootState) => {
  if (selectNumberOfAnimals(state) === undefined) {
    return { isValid: false, reason: 'Please enter a valid number' };
  } else {
    return { isValid: true };
  }
};
export const selectAvgLiveweightValid = (
  state: RootState
): ValidationResult => {
  const { numberOfAnimals, avgLiveweight } = state.beef;

  if (numberOfAnimals === undefined || numberOfAnimals <= 0) {
    return { isValid: true };
  } else if (avgLiveweight === undefined || avgLiveweight <= 0) {
    return {
      isValid: false,
      reason: 'Please enter a valid average liveweight',
    };
  }

  return { isValid: true };
};

export default beefSlice.reducer;
