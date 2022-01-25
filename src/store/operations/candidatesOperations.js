import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCandidates } from "../../api/fetchData";

export const fetchAllCandidates = createAsyncThunk(
  "candidates/fetchAllCandidates",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCandidates();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchFilteredCandidates = createAsyncThunk(
  "candidates/fetchFilteredCandidates",
  async (id, { rejectWithValue }) => {
    try {
      //   const data = await delContact(id);
      //   return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
