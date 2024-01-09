import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleMenu } = appslice.actions;
export default appslice.reducer;
