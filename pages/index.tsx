import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import CheckoutStep from "../components/checkoutStep";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";

const Home = () => {
  const nonPurchase = useStoreState((state: any) => state.nonPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const checkoutStep = useStoreState((state: any) => state.checkoutStep);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);
  const { cart } = useCarts();

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  // const handleSubmit = () => {

  // }

  return (
    <LandingPage>
      <CheckoutStep
        nonPurchase={nonPurchase}
        allPurchases={allPurchases}
        checkoutStep={checkoutStep}
        carts={carts}
      />
    </LandingPage>
  );
};

export default Home;
