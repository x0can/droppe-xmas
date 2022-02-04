import { createStore, action } from "easy-peasy";

export const store = createStore({
  products: [],
  addProducts: action((state: any, payload) => {
    state.products = payload;
  }),
});
