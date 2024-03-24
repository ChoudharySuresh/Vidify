import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    searchSuggestion: [],
    showSuggestionList: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
    setShowSuggestionList: (state, action) => {
      state.showSuggestionList = action.payload;
    },
  },
});

export const { setSearchValue, setSearchSuggestion, setShowSuggestionList } =
  SearchSlice.actions;
export default SearchSlice.reducer;
