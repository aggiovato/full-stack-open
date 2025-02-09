import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification: (state, action) => (state = action.payload),
    clearNotification: () => "",
  },
});

// ACTION CREATORS (external functions)
export const { setNotification, clearNotification } = notificationSlice.actions;

// THUNK CREATORS
let timeout = null;

export const setNotificationTimeout = (message, duration = 5000) => {
  return async (dispatch) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    dispatch(setNotification(message));

    timeout = setTimeout(() => {
      dispatch(clearNotification());
      timeout = null;
    }, duration);
  };
};

// REDUCER
export default notificationSlice.reducer;
