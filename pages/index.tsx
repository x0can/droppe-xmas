import { Flex } from "@chakra-ui/layout";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage";
import OrderTable from "../components/orderTable";
import CheckButton from "../components/checkOrderButton";
import { useCarts } from "../lib/hooks";

const Home = () => {
  const { cart } = useCarts();
  const [checkOrder, setCheckOrder] = useState(false);
  const [orders, setOrders] = useState();
  const [approved, setApproved] = useState();
  const addPurchase = useStoreActions((state: any) => state.addPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);

  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  const handleSubmit = (item) => {
    setCheckOrder(true);
    allPurchases.push(item);
    addPurchase(allPurchases);
    setApproved(item);
  };

  const arrayReducer = (arr) => {
    if (arr.length > 5) {
      arr.length -= 1;
      return arr;
    }
    if (arr.length === 5) {
      return arr;
    }
  };

  const handleCheck = () => {
    setOrders(allPurchases);
  };

  return (
    <LandingPage carts={arrayReducer(carts)} handleSubmit={handleSubmit}>
      <Flex align="center" justify="center" padding="20px">
        {allPurchases ? (
          <CheckButton text="CHECK ORDER" handleCheck={handleCheck} />
        ) : (
          ""
        )}
      </Flex>
      <Flex align="center" justify="center" padding="20px">
        {checkOrder ? <OrderTable orders={orders} /> : ""}
      </Flex>
    </LandingPage>
  );
};

export default Home;
