import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import globalReducers from './slices/globalSlice';

export const customStore = () => {
  return configureStore({
    reducer: {
      global: globalReducers,
    },
  });
};

export const store = customStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  unknown,
  AppState,
  Action<string>
>;
