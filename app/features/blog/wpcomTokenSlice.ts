import { createSlice } from "@reduxjs/toolkit";

export const wpcomTokenSlice = createSlice({
  name: "wpcomToken",
  initialState: {
    value: null,
  },
  reducers: {
    storeOauthToken: (state, newValue) => {
      state.value = newValue.payload;
    },
    destroyOauthToken: (state) => {
      state.value = null;
    },
  },
});

export const { storeOauthToken, destroyOauthToken } = wpcomTokenSlice.actions;

export default wpcomTokenSlice.reducer;
