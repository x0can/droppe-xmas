/* eslint-disable no-console */
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { Spinner, Box, Flex } from "@chakra-ui/react";
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
  const duplicates = useStoreState((state: any) => state.duplicates);

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
    return (
      <LandingPage>
        <Flex overflowY="auto" align="center" justify="center">
          <Box
            overflow="hidden"
            bgColor="gray.100"
            height="calc(70vh - 100px)"
            padding="30px"
            width="100vw"
            margin="130px 100px 10px "
            boxShadow="2xl"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        </Flex>
      </LandingPage>
    );
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
        duplicate={duplicates}
      />
    </LandingPage>
  );
};

export default Home;
