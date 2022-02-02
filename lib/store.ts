import { createStore, action } from "easy-peasy";

export const store = createStore({
  allCarts: [],
  allPurchases: [],
  nonPurchase: [],
  activePurchase: null,

  addAllCarts: action((state: any, payload) => {
    state.allCarts = payload;
  }),

  addPurchase: action((state: any, payload) => {
    state.allPurchases = payload;
  }),

  addNonPurchase: action((state: any, payload) => {
    state.nonPurchase = payload;
  }),

  setApproved: action((state: any, payload) => {
    state.activePurchase = payload;
  }),
});
