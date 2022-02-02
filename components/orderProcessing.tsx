/* eslint-disable no-unused-vars */
import {
  Flex,
  Box,
  Center,
  Link,
  IconButton,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import ProductLayout from "./productLayout";
import LandingPage from "./landingPage";
import OrderTable from "./orderTable";
import { arrayRemove } from "../lib/filter";
import { compareArray } from "../lib/compare";
import { useCarts } from "../lib/hooks";

const OrderProcessing = () => {
  const { cart } = useCarts();
  const [approved, setApproved] = useState();

  const addPurchase = useStoreActions((state: any) => state.addPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const addNonPurchase = useStoreActions((store: any) => store.addNonPurchase);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  const handleSubmit = (item) => {
    allPurchases.push(item);
    addPurchase(allPurchases);
    return setApproved(item);
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

  const handleDelete = (item) => {
    const newArray = arrayRemove(allPurchases, item);

    return addPurchase(newArray);
  };

  const handlePurchaseOrder = () => {
    const arr1 = arrayReducer(carts);
    const notPurchased = compareArray(arr1, allPurchases);
    addNonPurchase(notPurchased);
  };

  if (!arrayReducer(carts)) {
    return <LandingPage>Loading</LandingPage>;
  }

  return (
    <>
      <Flex overflowY="auto" align="center" justify="center">
        <Box
          overflow="hidden"
          bgColor="gray.100"
          height="50vh"
          padding="30px"
          width="100vw"
          margin="130px 100px 10px "
          boxShadow="2xl"
        >
          <ProductLayout
            carts={arrayReducer(carts)}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Flex>
      <Box bg="gray.200" height="100vh" p={6}>
        <Flex align="center" justify="center" padding="20px">
          {allPurchases ? (
            <Flex align="center" justify="center" padding="20px">
              <Center>
                <OrderTable orders={allPurchases} handleDelete={handleDelete} />
              </Center>
            </Flex>
          ) : (
            ""
          )}
        </Flex>
        <Box
          position="fixed"
          top="15px"
          right={["16px", "84px"]}
          zIndex={1}
          onClick={handlePurchaseOrder}
        >
          <Link href="/checkout">
            <Text>
              <IconButton
                colorScheme="white"
                size="lg"
                aria-label="checkout"
                icon={<FaCartArrowDown fontSize="50px" color="green" />}
              />
              <Badge colorScheme="orange">{allPurchases.length}</Badge>
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default OrderProcessing;
