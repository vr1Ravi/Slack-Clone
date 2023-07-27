import { createSlice } from "@reduxjs/toolkit";

const messageinstanceSlice = createSlice({
  name: "messageinstance",
  initialState: {
    value: null,
  },
  reducers: {
    setMessageInstance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMessageInstance } = messageinstanceSlice.actions;
export default messageinstanceSlice.reducer;
