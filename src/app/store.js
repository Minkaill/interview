import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../features/categorySlice"
import questionSlice from "../features/questionSlice"

export const store = configureStore({
  reducer: {
      category: categorySlice,
      questions: questionSlice
  },
})