import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCandidates } from "../../api/fetchData";

export const fetchCandidates = createAsyncThunk(
  "candidates/fetchCandidates",
  async (page = 1, { rejectWithValue, getState }) => {
    try {
      const { filters } = getState();

      const data = await getCandidates(page, filters);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
