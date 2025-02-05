import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Components/api/index";
import i18next from 'i18next';


export const fetchAllSocials = createAsyncThunk(
  "socials/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `main/socials`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch socials");
    }
  }
);

const socialsSlice = createSlice({
  name: "socials",
  initialState: {
    socials: [],
    status: "idle", 
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSocials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSocials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.socials = action.payload;
      })
      .addCase(fetchAllSocials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default socialsSlice.reducer;