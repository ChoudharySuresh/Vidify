import { createSlice } from "@reduxjs/toolkit";

const commentslice = createSlice({
  name: "comment",
  initialState: {
    replyButtonStates: {},
  },
  reducers: {
    toggleReplyButton: (state, action) => {
      const { commentId } = action.payload;
      state.replyButtonStates[commentId] = !state.replyButtonStates[commentId];
    },
  },
});

export const { toggleReplyButton } = commentslice.actions;
export default commentslice.reducer;
