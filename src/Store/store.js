import { configureStore } from "@reduxjs/toolkit";
import appslice from "./Slice/appslice";
import dataslice from "./Slice/dataslice";
const store = configureStore({
  reducer: {
    app: appslice,
    data: dataslice,
  },
});

export default store;
