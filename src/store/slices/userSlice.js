import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: localStorage.getItem("user"),
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      localStorage.setItem("user", state.token);
      state.id = action.payload.id;
    },
    removeUsers(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUsers, removeUsers } = userSlice.actions;
export default userSlice.reducer;
