import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice.js";

//create reduxstore
var myStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
