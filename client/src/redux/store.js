import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice';
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';
import resumeSlice from './slice/resumeSlice.js';
import skillSliceJsCopy from './slice/skillSlice.js';



export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    user: userSlice,
    experience: resumeSlice,
    skill: skillSliceJsCopy,

  }
});