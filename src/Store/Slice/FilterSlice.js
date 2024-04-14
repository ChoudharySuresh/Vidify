import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isFilter: false,
    filterVideos: [],
  },
  reducers: {
    toggleFilter: (state, action) => {
      state.isFilter = action.payload;
    },

    setFilterVideos: (state, action) => {
      state.filterVideos = action.payload;
    },
  },
});

export const { toggleFilter, setFilterVideos } = filterSlice.actions;
export default filterSlice.reducer;
