import { createSlice, configureStore } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});
const 장바구니 = createSlice({
  name: "장바구니",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    장바구니: 장바구니.reducer,
  },
});
