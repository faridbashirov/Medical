import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Components/api/index"; // Adjust the import based on your project structure
import i18next from 'i18next';

// Async thunk for fetching positions
export const fetchAllPositions = createAsyncThunk(
  "positions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${i18next.language === "ru" ? "" : i18next.language + "/"}account/all_positions`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch positions");
    }
  }
);

const positionsSlice = createSlice({
  name: "positions",
  initialState: {
    positions: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {}, // You can add additional reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPositions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPositions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.positions = action.payload;
      })
      .addCase(fetchAllPositions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default positionsSlice.reducer;
