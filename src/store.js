import { createSlice, configureStore } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import { changeName, changeAge } from "./store/userSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
const 장바구니 = createSlice({
  name: "장바구니",
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    delCart(state, action) {
      state.splice(action.payload, 1);
    },
    addCart(state, action) {
      let count = 0;
      state.map((a, i) => {
        if (state[i].id == action.payload.id) {
          return alert("중복된 물품입니다.");
        } else {
          count++;
        }
        if (count == state.length) {
          state.push(action.payload);
        }
      });
    },
    changeCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[번호].count++;
    },
  },
});

export let { changeCount, addCart, delCart } = 장바구니.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    장바구니: 장바구니.reducer,
  },
});
