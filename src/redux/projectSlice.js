import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "@/utils/supabase";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("projects")
      .select("id, category, title, description, techstacks, link");

    if (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
    return data; // array of rows
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load projects";
      });
  },
});

export default projectSlice.reducer;
