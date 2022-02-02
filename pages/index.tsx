/* eslint-disable no-console */
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import CheckoutStep from "../components/checkoutStep";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { submitAction } from "../lib/submit";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { cart, isLoading } = useCarts();

  const nonPurchase = useStoreState((state: any) => state.nonPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const checkoutStep = useStoreState((state: any) => state.checkoutStep);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      allPurchases.forEach(async (purchase) => {
        await submitAction(purchase);
        nonPurchase.forEach(async (reject) => {
          await submitAction(reject);
          setLoading(false);
        });
      });
    } catch (e) {
      console.error(e);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <LandingPage>
      <CheckoutStep
        nonPurchase={nonPurchase}
        allPurchases={allPurchases}
        checkoutStep={checkoutStep}
        carts={carts}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </LandingPage>
  );
};

export default Home;
