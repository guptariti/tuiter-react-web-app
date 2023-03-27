import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {currActive: "home"},
  reducers: {
    changeActive(state, action) {
      state.currActive = action.payload;
    }
  }
});

export const { changeActive } = navSlice.actions;
export default navSlice.reducer;