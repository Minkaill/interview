import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../features/categorySlice"
import questionSlice from "../features/questionSlice"
import nightmodeSlice from '../features/nightmodeSlice';

export const store = configureStore({
  reducer: {
      category: categorySlice,
      questions: questionSlice,
      nightmode: nightmodeSlice
  },
})