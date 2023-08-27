import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

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
      state.petrolYearlyUse = Number.parseFloat(action.payload);
    },
    setDieselYearlyUse: (state, action: PayloadAction<string>) => {
      state.dieselYearlyUse = Number.parseFloat(action.payload);
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

export default fuelSlice.reducer;
