import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "Notification Test",
  visible: false,
  currentNotifId: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    createNotification(state, action) {
      state.content = action.payload.content;
      state.currentNotifId = action.payload.id;
      state.visible = true;
    },
    removeNotification(state, action) {
      if (state.currentNotifId === action.payload) {
        state.content = "You should not see this";
        state.visible = false;
      }
    },
  },
});

export const { createNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (content, timeOut) => {
  return (dispatch) => {
    const id = setTimeout(
      () => dispatch(removeNotification(id)),
      timeOut * 1000
    );
    dispatch(createNotification({ content, id }));
  };
};

export default notificationSlice.reducer;
