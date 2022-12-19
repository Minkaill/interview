import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nightmode: false,
};

const nightmodeSlice = createSlice({
  name: "nightmode",
  initialState,
  reducers: {
    nightOn: (state, action) => {
      state.nightmode = true;
    },
    dayOn: (state, action) => {
      state.nightmode = false;
    },
  },
  extraReducers: (builder) => {},
});

export default nightmodeSlice.reducer;
