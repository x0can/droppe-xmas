/* eslint-disable no-unused-vars */
import {
  Flex,
  Box,
  Center,
  Link,
  IconButton,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Badge,
} from "@chakra-ui/react";
import { useStore, useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import ProductLayout from "./productLayout";
import LandingPage from "./landingPage";
import OrderTable from "./orderTable";
import { arrayRemove, arrayReducer } from "../lib/filter";
import { compareArray } from "../lib/compare";
import { calculateDiscount } from "../lib/discount";

const OrderProcessing = ({ carts }) => {
  const [approved, setApproved] = useState();

  const addPurchase = useStoreActions((state: any) => state.addPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const addNonPurchase = useStoreActions((store: any) => store.addNonPurchase);
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const setCheckout = useStoreActions((state: any) => state.setCheckout);
  const setDuplicate = useStoreActions((state: any) => state.setDuplicate);

  const handleSubmit = (item) => {
    allPurchases.push(item);
    addPurchase(allPurchases);
    return setApproved(item);
  };

  const handleDelete = (item) => {
    const newArray = arrayRemove(allPurchases, item);
    addPurchase(newArray);
    addAllCarts(carts);
  };

  const handlePurchaseOrder = () => {
    const notPurchased = compareArray(carts, allPurchases);
    addNonPurchase(notPurchased);
    setCheckout(true);
    setDuplicate(calculateDiscount(allPurchases));
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
      <Box bg="gray.200" p={6}>
        <Flex align="center" justify="center" padding="20px">
          {allPurchases.length !== 0 ? (
            <Flex
              padding="20px"
              align="center"
              justify="center"
              alignItems="center"
            >
              <List spacing={3} alignContent="center">
                <ListItem margin="20px">
                  <Box width="100%">Click on table column to view products</Box>
                </ListItem>
                <ListItem>
                  <Box width="100%">
                    <OrderTable
                      orders={allPurchases}
                      handleDelete={handleDelete}
                    />
                  </Box>
                </ListItem>
              </List>
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
          <Link href="#/checkout">
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
