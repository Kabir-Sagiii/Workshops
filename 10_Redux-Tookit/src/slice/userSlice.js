import { createSlice } from "@reduxjs/toolkit";

var userSlice = createSlice({
  //{name:"",reducer:F,actions:{username:AC}}
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    username: (state, action) => {
      state = {
        name: action.payload,
      };

      return state;
    },
  },
});

export var { username } = userSlice.actions;

export default userSlice.reducer;
