import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Components/api/index";
import i18next from 'i18next';


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
    status: "idle", 
    error: null,
  },
  reducers: {}, 
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
