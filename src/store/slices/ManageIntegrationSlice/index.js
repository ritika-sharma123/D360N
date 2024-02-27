import { createSlice } from "@reduxjs/toolkit";

const manageIntegrationSlice = createSlice({
  name: "manageIntegration",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
  },
  extraReducers: (builder) => {},
});

export const { increment } = manageIntegrationSlice.actions;

export default manageIntegrationSlice.reducer;
