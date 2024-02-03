import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../Utils/Constant";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const dataslice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setData, setStatus } = dataslice.actions;

export default dataslice.reducer;

export const fetchVideos = () => {
  return async function fetchVideosThunk(dispath) {
    dispath(setStatus(STATUSES.LOADING));
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${API_KEY}`
      );
      const jsonResponse = await response.json();
      // console.log(jsonResponse.items);
      dispath(setData(jsonResponse.items));
      dispath(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispath(setStatus(STATUSES.ERROR));
      console.log(err);
    }
  };
};
