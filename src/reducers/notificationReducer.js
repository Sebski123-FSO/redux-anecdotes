import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "Notification Test",
  visible: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    createNotification(state, action) {
      state.content = action.payload;
      state.visible = true;
    },
    removeNotification(state) {
      state.content = "You should not see this";
      state.visible = false;
    },
  },
});

export const { createNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (content, timeOut) => {
  return (dispatch) => {
    dispatch(createNotification(content));
    setTimeout(() => dispatch(removeNotification()), timeOut * 1000);
  };
};

export default notificationSlice.reducer;
