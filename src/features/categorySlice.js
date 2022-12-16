import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: [],
    error: null,
    loadingCategory: false
}


export const getCategory = createAsyncThunk("get/category", async (_, thunkAPI) => {
    try {
        const responseGetCategory = await axios.get("http://localhost:4000/categorys")
        return responseGetCategory.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
        console.log(error.message)
        alert(error.message)
    }
})


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategory.pending, (state, action) => {
            state.loadingCategory = true
        })
        .addCase(getCategory.fulfilled, (state, action) => {
            state.category = action.payload
            state.loadingCategory = false
        })
        .addCase(getCategory.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export default categorySlice.reducer