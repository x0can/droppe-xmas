import { Flex } from "@chakra-ui/layout";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import MainButton from "../components/button";
import LandingPage from "../components/landingPage";
import OrderTable from "../components/orderTable";
import { useCarts } from "../lib/hooks";

const Home = () => {
  const { cart } = useCarts();
  const [checkOrder, setCheckOrder] = useState(false);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);
  const allPurchaseActions = useStoreState(
    (state: any) => state.allPurchaseActions
  );

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  const arrayReducer = (arr) => {
    if (arr.length > 5) {
      arr.length -= 1;
      return arr;
    }
    if (arr.length === 5) {
      return arr;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckOrder(true);
  };

  return (
    <LandingPage carts={arrayReducer(carts)}>
      <Flex align="center" justify="center" padding="20px">
        {allPurchaseActions?.length > 0 ? (
          <MainButton text="CHECK ORDER" handleSubmit={handleSubmit} />
        ) : (
          ""
        )}
      </Flex>
      <Flex align="center" justify="center" padding="20px">
        {checkOrder ? <OrderTable orders={allPurchaseActions} /> : ""}
      </Flex>
    </LandingPage>
  );
};

export default Home;
