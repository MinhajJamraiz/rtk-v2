import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearAllUsers: (state, action) => {
      return [];
    },
    editUser: (state, action) => {
      state[action.payload.id] = action.payload.name;
    },
    // (state[action.payload.id] = action.payload.name),
  },
  // extraReducers(builder) {
  //   builder.addCase(UserSlice.actions.clearAllUsers, () => {
  //     return [];
  //   });
  // },
});

export const { addUser, deleteUser, clearAllUsers, editUser } =
  UserSlice.actions;
export default UserSlice.reducer;
