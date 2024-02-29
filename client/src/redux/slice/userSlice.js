"use client";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios'

const initialState = {
  userlistData: {},
  userData:{}
}

export const createUser = createAsyncThunk('user/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('users', params)
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
  extraReducers: {

    [me.pending]: (state,) => {
      state.loading = false
      state.userlistData = {}
    },
    [me.fulfilled]: (state, action) => {
      state.loading = false
      state.userData = action.payload

    }, [me.rejected]: (state,) => {
      state.loading = false
      state.userList = {}
    },

  }
})

export default userSlice.reducer