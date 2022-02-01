import { createStore, action } from "easy-peasy";

export const store = createStore({
  approvedCarts: [],
  discardedCarts: null,
  addApprovedCart: action((state: any, payload) => {
    state.approvedCarts = payload;
  }),
  addDiscardedCart: action((state: any, payload) => {
    state.discardedCarts = payload;
  }),
});
