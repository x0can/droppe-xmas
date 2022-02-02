import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CheckoutStep from "../components/checkoutStep";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { submitAction } from "../lib/submit";
import { MotionBox } from "../components/motionBox";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const { cart, isLoading } = useCarts();
  const router = useRouter();
  const nonPurchase = useStoreState((state: any) => state.nonPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const checkoutStep = useStoreState((state: any) => state.checkoutStep);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const setCheckout = useStoreActions((state: any) => state.setCheckout);
  const carts = useStoreState((state: any) => state.allCarts);
  const duplicates = useStoreState((state: any) => state.duplicates);
  const successOrder = useStoreState((state: any) => state.successOrder);
  const setSuccessOrder = useStoreActions(
    (state: any) => state.setSuccessOrder
  );
  const addPurchase = useStoreActions((state: any) => state.addPurchase);

  useEffect(() => {
    if (successOrder) {
      setCheckout(false);
      setSuccessOrder(false);
      addPurchase([]);
      router.push("/success");
    }
  });
  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  const noOptionSelected = () => {
    setCheckout(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      allPurchases.forEach(async (purchase) => {
        await submitAction(purchase);
        nonPurchase.forEach(async (reject) => {
          await submitAction(reject);
          setLoading(false);
          setSuccessOrder(true);
        });
      });
    } catch (e) {
      console.error(e);
    }
  };

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
      <CheckoutStep
        nonPurchase={nonPurchase}
        allPurchases={allPurchases}
        checkoutStep={checkoutStep}
        carts={carts}
        handleSubmit={handleSubmit}
        loading={loading}
        duplicate={duplicates}
        noOptionSelected={noOptionSelected}
      />
    </LandingPage>
  );
};

export default Home;
