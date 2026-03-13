import { configureStore } from "@reduxjs/toolkit";
import wpcomTokenReducer from "./features/blog/wpcomTokenSlice";

export const store = configureStore({
  reducer: {
    wpcomToken: wpcomTokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
