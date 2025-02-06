import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "render here notification...",
  reducers: {
    setNotification: (state, action) => (state = action.payload),
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
