import { createStore, action } from "easy-peasy";

export const store = createStore({
  allCarts: [],
  allPurchases: [],

  addAllCarts: action((state: any, payload) => {
    state.allCarts = payload;
  }),
 
  addPurchase: action((state: any, payload) => {
    state.allPurchases = payload;
  }),
});
