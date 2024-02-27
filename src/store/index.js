import { configureStore } from "@reduxjs/toolkit";
import ManageIntegrationSlice from "./slices/ManageIntegrationSlice";

export const store = configureStore({
  reducer: {
    manageIntegration: ManageIntegrationSlice,
  },
});
