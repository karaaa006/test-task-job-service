import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const { reducer, actions } = createSlice({
  name: "filtersReducer",
  initialState,
  reducers: {
    addFilter(state, action) {
      return { ...state, [action.payload.name]: action.payload.value };
    },
    toggleCheckbox(state, action) {
      return { ...state, [action.payload.name]: action.payload.value };
    },
  },
});

export const { toggleCheckbox, addFilter } = actions;

export default reducer;
