import { createSlice } from "@reduxjs/toolkit";
import { createAnecdote } from "./anecdoteSlice";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => (state = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(createAnecdote, () => "");
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
