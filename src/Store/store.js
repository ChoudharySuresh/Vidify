import { configureStore } from "@reduxjs/toolkit";
import appslice from "./Slice/appslice";
import commentslice from "./Slice/commentslice";
import SearchSlice from "./Slice/SearchSlice";
const store = configureStore({
  reducer: {
    app: appslice,
    comments: commentslice,
    search: SearchSlice,
  },
});

export default store;
