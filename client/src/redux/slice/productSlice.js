import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from '../axios/axios';

const initialState = {
    productListData: {},
    productData: {}
}

export const createPost = createAsyncThunk('products/create', async (params, { rejectWithValue }) => {
    try {
        return await instance.post('products', params)
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})



export const productList = createAsyncThunk('products', async (params, { rejectWithValue }) => {
    try {
        return await instance.get(`products`)
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})



export const productListById = createAsyncThunk('posts/:id', async (id, { rejectWithValue }) => {
    try {
        return await instance.get(`posts/${id}`,)
    } catch (error) {
        return rejectWithValue(error.responce)
    }
})




const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},

    //***************   Create Product ******************/

    extraReducers: (builder) => {
        builder
            // Create Product
            .addCase(createPost.pending, (state) => {
                state.loading = false;
                state.userlistData = {};
            })
            .addCase(createPost.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userlistData = action.payload;
                toast.success(action.payload.message);
            })
            .addCase(createPost.rejected, (state) => {
                state.loading = true;
                state.userList = {};
            })
            // Product productList
            .addCase(productList.pending, (state) => {
                state.loading = false;
                state.productListData = {};
            })
            .addCase(productList.fulfilled, (state, action) => {
                state.loading = false;
                state.productListData = action.payload;
            })
            .addCase(productList.rejected, (state) => {
                state.loading = false;
                state.productListData = {};
            })
            // Product productList By ID
            .addCase(productListById.pending, (state) => {
                state.loading = false;
                state.postlistData = {};
            })
            .addCase(productListById.fulfilled, (state, action) => {
                state.loading = false;
                state.postlistData = action.payload;
            })
            .addCase(productListById.rejected, (state) => {
                state.loading = false;
                state.postlistData = {};
            });
    },
})

export default productSlice.reducer