import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCandidates } from "../operations/candidatesOperations";

const initialState = { items: [] };

const { reducer } = createSlice({
  name: "candidatesReducer",
  initialState,
  extraReducers: {
    [fetchAllCandidates.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        items: [...state.items, ...action.payload.results],
      };
    },
  },
});

export default reducer;
