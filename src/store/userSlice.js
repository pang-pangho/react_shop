import { createSlice } from "@reduxjs/toolkit";
let user = createSlice({
  name: "user",
  initialState: { name: "김광호", age: "25세" },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    changeAge(state) {
      return {
        ...state,
        age: state.age + 1,
      };
    },
  },
});

export default user;
export let { changeName, changeAge } = user.actions;
