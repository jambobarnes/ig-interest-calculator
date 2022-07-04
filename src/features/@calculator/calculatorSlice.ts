import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CalculatorState {
  value: number;
  interest: number;
  result: number;
  history: object[];
}

const initialState: CalculatorState = {
  value: 0,
  interest: 0,
  result: 0,
  history: []
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addCalculations: (state, action) => {
      state.value = action.payload.value
      state.interest = action.payload.interest
      state.result = action.payload.calculated
      state.history = [action.payload, ...state.history]
    },
  }
});

export const selectValue = (state: RootState) => state.calculator.value;
export const selectInterest = (state: RootState) => state.calculator.interest;
export const selectResult = (state: RootState) => state.calculator.result;
export const selectHistory = (state: RootState) => state.calculator.history;

export const { addCalculations } = calculatorSlice.actions;

export default calculatorSlice.reducer;
