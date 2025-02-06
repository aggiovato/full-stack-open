import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase("CREATE", () => "");
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
