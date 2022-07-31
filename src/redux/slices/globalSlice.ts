import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isBoolean, isNumber } from 'lodash';

import { GlobalSliceInterface } from './GlobalSliceInterface';
import { initialState } from './initialGlobalStates';
export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setTestPopup: (state, action: PayloadAction<boolean>) => {
      state.isShownPopup = action.payload;
    },
  },
});

export const { setTestPopup } = globalSlice.actions;

export default globalSlice.reducer;
