import { Flex, Box } from "@chakra-ui/layout";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRef, useEffect, useState } from "react";
import ProductLayout from "../components/productLayout";
import LandingPage from "../components/landingPage";
import OrderTable from "../components/orderTable";
import CheckButton from "../components/checkOrderButton";
import { arrayRemove } from "../lib/filter";
import { compareArray } from "../lib/compare";
import { useCarts } from "../lib/hooks";
import SubmitButton from "../components/submitOrder";

const Home = () => {
  const { cart } = useCarts();
  const [checkOrder, setCheckOrder] = useState(false);
  const [orders, setOrders] = useState();
  const [message, setMessage] = useState();
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

  const handleDelete = (item) => {
    const newArray = arrayRemove(allPurchases, item);
    addPurchase(newArray);
    return handleCheck();
  };

  const handlePurchaseOrder = () => {
    const arr1 = arrayReducer(carts);
    const notPurchased = compareArray(arr1, allPurchases);
    console.log(notPurchased);
  };

  if (!arrayReducer(carts)) {
    return <LandingPage>Loading</LandingPage>;
  }

  return (
    <LandingPage>
      <Box overflowY="auto">
        <Box
          overflow="hidden"
          bgColor="gray.100"
          height="60vh"
          padding="30px"
          width="100vw"
        >
          {carts !== undefined ? (
            <ProductLayout
              carts={arrayReducer(carts)}
              handleSubmit={handleSubmit}
            />
          ) : (
            <Box> Waiting for data....</Box>
          )}
        </Box>
      </Box>
      <Box bg="gray.200" height="100vh">
        <Flex align="center" justify="center" padding="20px">
          {allPurchases ? (
            <CheckButton text="VIEW ORDER" handleCheck={handleCheck} />
          ) : (
            ""
          )}
        </Flex>
        {checkOrder ? (
          <>
            <Flex align="center" justify="center" padding="20px">
              <OrderTable orders={orders} handleDelete={handleDelete} />
            </Flex>
            <Flex align="center" justify="center" padding="20px">
              <SubmitButton
                text="CHECKOUT"
                handleSubmit={handlePurchaseOrder}
              />
            </Flex>
          </>
        ) : (
          ""
        )}
      </Box>
    </LandingPage>
  );
};

export default Home;
