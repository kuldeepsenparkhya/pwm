"use client";

import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice';
import authSlice from './slice/authSlice';



export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  }
})

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;