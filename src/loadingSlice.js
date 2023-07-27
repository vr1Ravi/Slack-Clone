import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value: false,
  },
  reducers: {
    enterLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { enterLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
