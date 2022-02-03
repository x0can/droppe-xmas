import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import CheckoutStep from "../components/checkoutStep";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { MotionBox } from "../components/motionBox";
import { arrayReducer } from "../lib/filter";

const Home = () => {
  const { cart, isLoading } = useCarts();
  const carts = useStoreState((state: any) => state.allCarts);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(arrayReducer(cart));
    }
  }, [addAllCarts, cart]);

  if (isLoading) {
    return (
      <ChakraProvider>
        <Container
          h="100vh"
          d="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MotionBox
            as="aside"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
            }}
            padding="2"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            width="12"
            height="12"
            display="flex"
          />
        </Container>
      </ChakraProvider>
    );
  }

  return (
    <LandingPage>
      <CheckoutStep carts={carts} />
    </LandingPage>
  );
};

export default Home;
