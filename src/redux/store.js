import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./../Slices/UserSlice";

const store = configureStore({
  reducer: { users: UserReducer },
});
export default store;
