import { configureStore } from "@reduxjs/toolkit";
import appslice from "./Slice/appslice";
import commentslice from "./Slice/commentslice";
const store = configureStore({
  reducer: {
    app: appslice,
    comments: commentslice,
  },
});

export default store;
