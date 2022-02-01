import { createStore, action } from "easy-peasy";

export const store = createStore({
  allCarts: [],
  allPurchaseActions: [],

  addAllCarts: action((state: any, payload) => {
    state.allCarts = payload;
  }),
  addPurchaseAction: action((state: any, payload) => {
    state.allPurchaseActions = payload;
  }),
});
