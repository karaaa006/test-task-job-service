import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates } from "../operations/candidatesOperations";

const initialState = { items: [], totalCount: 0, currentPage: 1, pageCount: 1 };

const { reducer } = createSlice({
  name: "candidatesReducer",
  initialState,
  extraReducers: {
    [fetchCandidates.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload.results],
        totalCount: action.payload.total_count,
        currentPage: action.payload.current_page,
        pageCount: action.payload.page_count,
      };
    },
  },
});

export default reducer;
