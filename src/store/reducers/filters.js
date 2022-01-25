import { createSlice } from "@reduxjs/toolkit";

const initialState = { photo: false };

const { reducer, actions } = createSlice({
  name: "filtersReducer",
  initialState,
  reducers: {
    toggleCheckbox(state, action) {
      console.log(!state[action.payload]);
      return { ...state, [action.payload]: !state[action.payload] };
    },
  },
});

export const { toggleCheckbox } = actions;

export default reducer;
