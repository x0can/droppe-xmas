import { createStore, action } from "easy-peasy";

export const store = createStore({
  allCarts: [],
  approvedCarts: [],
  discardedCarts: [],

  addAllCarts: action((state: any, payload) => {
    state.allCarts = payload;
  }),
  addApprovedCart: action((state: any, payload) => {
    state.approvedCarts = payload;
  }),
  addDiscardedCart: action((state: any, payload) => {
    state.discardedCarts = payload;
  }),
});
