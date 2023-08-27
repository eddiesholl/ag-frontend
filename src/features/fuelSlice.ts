import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { stringToFloat } from '../utils/parse';
import { hasValue } from '../utils/validation';

interface FuelState {
  petrolYearlyUse?: number;
  dieselYearlyUse?: number;
}

const initialState: FuelState = {};

export const fuelSlice = createSlice({
  name: 'fuel',
  initialState,
  reducers: {
    setPetrolYearlyUse: (state, action: PayloadAction<string>) => {
      state.petrolYearlyUse = stringToFloat(action.payload);
    },
    setDieselYearlyUse: (state, action: PayloadAction<string>) => {
      state.dieselYearlyUse = stringToFloat(action.payload);
    },
  },
});

export const { setPetrolYearlyUse, setDieselYearlyUse } = fuelSlice.actions;

export const selectDieselYearlyUse = (state: RootState) =>
  state.fuel.dieselYearlyUse;
export const selectPetrolYearlyUse = (state: RootState) =>
  state.fuel.petrolYearlyUse;
export const selectFuelEmissions = (state: RootState) =>
  (selectDieselYearlyUse(state) || 0) * 0.03 +
  (selectPetrolYearlyUse(state) || 0) * 0.01;

export const selectDieselYearlyUseValid = (state: RootState) =>
  hasValue(selectDieselYearlyUse(state));
export const selectPetrolYearlyUseValid = (state: RootState) =>
  hasValue(selectPetrolYearlyUse(state));

export default fuelSlice.reducer;
