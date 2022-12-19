import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  error: null,
  loadingQuestion: false,
};

export const getQuestion = createAsyncThunk(
  "/get/question",
  async (_, thunkAPI) => {
    try {
      const responseQuestions = await axios.get(
        "https://639e1cfa1ec9c6657bb9eece.mockapi.io/questions"
      );
      console.log(responseQuestions.data);
      return responseQuestions.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      console.log(error.message);
      alert(error.message);
    }
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state, action) => {
        state.loadingQuestion = true;
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loadingQuestion = false;
        state.questions = action.payload;
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default questionSlice.reducer;
