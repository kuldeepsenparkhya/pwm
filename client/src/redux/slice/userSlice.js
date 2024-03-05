import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios'

const initialState = {
  userlistData: {},
  userData: {}
}

export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('users', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



export const userAbout = createAsyncThunk('/users', async ({ rejectWithValue }) => {
  try {
    return await instance.get(`/users`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})




export const me = createAsyncThunk('/me', async (id, { rejectWithValue }) => {
  try {
    return await instance.get(`me`,)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})



const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(me.pending, (state) => {
        state.loading = true;
        state.userlistData = {};
      })
      .addCase(me.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(me.rejected, (state) => {
        state.loading = false;
        state.userData = {};
      })
      .addCase(userAbout.pending, (state) => {
        state.loading = true;
        state.userlistData = {};
      })
      .addCase(userAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(userAbout.rejected, (state) => {
        state.loading = false;
        state.userData = {};
      });
  },
});

export default userSlice.reducer