import { createStore, action } from "easy-peasy";

export const store = createStore({
  products: [],
  discount: null,
  addProducts: action((state: any, payload) => {
    state.products = payload;
  }),
  addDiscount: action((state: any, payload) => {
    state.discount = payload;
  }),
});
