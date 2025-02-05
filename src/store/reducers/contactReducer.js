import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Components/api/index";
import i18next from 'i18next';


export const fetchAllContact = createAsyncThunk(
  "contact/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${i18next.language === "ru" ? "" : i18next.language + "/"}main/contact_info`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch contact");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: [],
    status: "idle", 
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contact = action.payload;
      })
      .addCase(fetchAllContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;