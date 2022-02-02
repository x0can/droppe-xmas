import { createStore, action } from "easy-peasy";

export const store = createStore({
  allCarts: [],
  allPurchases: [],
  nonPurchase: [],
  checkoutStep: null,
  duplicates: 1,
  successOrder: false,

  addAllCarts: action((state: any, payload) => {
    state.allCarts = payload;
  }),

  addPurchase: action((state: any, payload) => {
    state.allPurchases = payload;
  }),

  addNonPurchase: action((state: any, payload) => {
    state.nonPurchase = payload;
  }),

  setCheckout: action((state: any, payload) => {
    state.checkoutStep = payload;
  }),
  setDuplicate: action((state: any, payload) => {
    state.duplicates = payload;
  }),
  setSuccessOrder: action((state: any, payload) => {
    state.successOrder = payload;
  }),
});
